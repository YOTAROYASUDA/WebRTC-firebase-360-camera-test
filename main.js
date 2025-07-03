import { db } from "./firebase-config.js";
import {
  collection, doc, setDoc, getDoc, onSnapshot, addDoc, updateDoc, deleteDoc
} from "firebase/firestore";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// --- DOM要素の取得 ---
const roleInputs = document.querySelectorAll('input[name="role"]');
const senderControls = document.getElementById("senderControls");
const receiverControls = document.getElementById("receiverControls");
const callControls = document.getElementById("callControls");
const statsControls = document.getElementById("statsControls");

const resolutionSelect = document.getElementById("resolution");
const codecSelect = document.getElementById("codecSelect");
const startCameraBtn = document.getElementById("startCamera");
const joinCallBtn = document.getElementById("joinCall");
const hangUpBtn = document.getElementById("hangUpBtn");

const callIdInput = document.getElementById("callIdInput");
const callIdDisplay = document.getElementById("callIdDisplay");
const copyCallIdBtn = document.getElementById("copyCallId");

const localVideo = document.getElementById("localVideo");
const remoteVideo = document.getElementById("remoteVideo");

const startStatsRecordingBtn = document.getElementById("startStatsRecording");
const stopStatsRecordingBtn = document.getElementById("stopStatsRecording");
const downloadStatsBtn = document.getElementById("downloadStats");
const statsDisplay = document.getElementById("statsDisplay");

// --- グローバル変数 ---
let peerConnection;
let localStream;
let callDocRef, offerCandidates, answerCandidates;
let currentRole = "sender";

// 360度ビューワー関連
let camera, scene, renderer, controls;

// 統計情報関連
let statsInterval;
let recordedStats = [];
let isRecording = false;
let lastReport = null; // ビットレート計算用に前回のレポートを保持

const resolutions = {
  fourK: { width: 3840, height: 1920 }
};

// --- WebRTC & 3Dビューワー関連 ---

function setupConnection() {
  const configuration = {
    iceServers: [
        { urls: "stun:stun.relay.metered.ca:80" },
        { urls: "turn:a.relay.metered.ca:80", username: "3c2899b6892a0dd428438fa2", credential: "UjVDP6QSI1bu0yiq" },
        { urls: "turn:a.relay.metered.ca:80?transport=tcp", username: "3c2899b6892a0dd428438fa2", credential: "UjVDP6QSI1bu0yiq" },
        { urls: "turn:a.relay.metered.ca:443", username: "3c2899b6892a0dd428438fa2", credential: "UjVDP6QSI1bu0yiq" },
        { urls: "turn:a.relay.metered.ca:443?transport=tcp", username: "3c2899b6892a0dd428438fa2", credential: "UjVDP6QSI1bu0yiq" },
    ],
    iceCandidatePoolSize: 10,
  };
  peerConnection = new RTCPeerConnection(configuration);

  peerConnection.onconnectionstatechange = () => {
    if (peerConnection.connectionState === 'connected') {
        statsControls.style.display = 'block'; // 接続されたら統計コントロールを表示
    } else if (['disconnected', 'failed', 'closed'].includes(peerConnection.connectionState)) {
        statsControls.style.display = 'none';
        stopStatsRecording(); // 接続が切れたら記録も停止
    }
  };
}

function preferCodec(sdp, codecName) {
  const lines = sdp.split('\r\n');
  const mLineIndex = lines.findIndex(line => line.startsWith('m=video'));
  if (mLineIndex === -1) return sdp;

  const codecRegex = new RegExp(`a=rtpmap:(\\d+) ${codecName}/90000`, 'i');
  const codecLine = lines.find(line => codecRegex.test(line));
  if (!codecLine) return sdp;

  const codecPayload = codecLine.match(codecRegex)[1];
  const mLineParts = lines[mLineIndex].split(' ');
  const newMLine = [mLineParts[0], mLineParts[1], mLineParts[2], codecPayload, ...mLineParts.slice(3).filter(pt => pt !== codecPayload)];
  lines[mLineIndex] = newMLine.join(' ');
  return lines.join('\r\n');
}

async function hangUp() {
  stopStatsRecording();

  if (peerConnection) {
    peerConnection.close();
    peerConnection = null;
  }
  if (localStream) {
    localStream.getTracks().forEach(track => track.stop());
    localStream = null;
  }
  if (callDocRef) {
    await deleteDoc(callDocRef).catch(e => console.error("ドキュメント削除エラー: ", e)); // Firestoreのドキュメントを削除
    callDocRef = null;
  }
  
  resetUI();
}

function resetUI() {
    localVideo.srcObject = null;
    remoteVideo.srcObject = null;
    localVideo.style.display = 'none';
    remoteVideo.style.display = 'none';

    callControls.style.display = "none";
    statsControls.style.display = "none";
    callIdDisplay.textContent = "";
    callIdInput.value = "";
    copyCallIdBtn.textContent = "コピー";
    
    startCameraBtn.disabled = false;
    joinCallBtn.disabled = false;

    // 3Dビューワーのリソースを解放
    if (renderer) {
      renderer.dispose();
      // bodyからcanvas要素（コンテナ）を削除する
      if (renderer.domElement.parentNode) {
        document.body.removeChild(renderer.domElement);
      }
      renderer = null; camera = null; scene = null; controls = null;
    }

    // 統計UIをリセット
    statsDisplay.textContent = "";
    recordedStats = [];
    isRecording = false;
    lastReport = null; // lastReportもリセット
    startStatsRecordingBtn.disabled = false;
    stopStatsRecordingBtn.disabled = true;
    downloadStatsBtn.disabled = true;
}

// --- 統計情報関連 ---

function startStatsRecording() {
  if (!peerConnection || isRecording) return;
  isRecording = true;
  recordedStats = [];
  lastReport = null; // 記録開始時にリセット

  startStatsRecordingBtn.disabled = true;
  stopStatsRecordingBtn.disabled = false;
  downloadStatsBtn.disabled = true;
  statsDisplay.textContent = "記録中...";

  statsInterval = setInterval(async () => {
      if (!peerConnection) return;
      const stats = await peerConnection.getStats();
      const currentTime = new Date().toISOString();
      let dataToRecord = { timestamp: currentTime };

      stats.forEach(report => {
          if (currentRole === "sender") {
              if (report.type === 'outbound-rtp' && report.mediaType === 'video') {
                  dataToRecord.frameWidth = report.frameWidth;
                  dataToRecord.frameHeight = report.frameHeight;
                  dataToRecord.framesPerSecond = report.framesPerSecond;
                  dataToRecord.totalEncodeTime = report.totalEncodeTime?.toFixed(3) ?? 'N/A';
                  
                  if (lastReport) {
                      const lastOutboundReport = lastReport.get(report.id);
                      if (lastOutboundReport && typeof lastOutboundReport.bytesSent === 'number') {
                          const bytesSent = report.bytesSent - lastOutboundReport.bytesSent;
                          dataToRecord.bitrateSent_kbps = Math.round((Math.max(0, bytesSent) * 8) / 1000);
                      } else {
                          dataToRecord.bitrateSent_kbps = 0;
                      }
                  } else {
                      dataToRecord.bitrateSent_kbps = 0;
                  }
              }
              if (report.type === 'candidate-pair' && report.nominated && report.state === 'succeeded') {
                  dataToRecord.roundTripTime_ms = report.currentRoundTripTime !== undefined ? (report.currentRoundTripTime * 1000).toFixed(0) : 'N/A';
              }
          } else { // receiver
              if (report.type === 'inbound-rtp' && report.mediaType === 'video') {
                  dataToRecord.frameWidth = report.frameWidth;
                  dataToRecord.frameHeight = report.frameHeight;
                  dataToRecord.framesPerSecond = report.framesPerSecond;
                  dataToRecord.jitter = report.jitter?.toFixed(3) ?? 'N/A';
                  dataToRecord.totalDecodeTime = report.totalDecodeTime?.toFixed(3) ?? 'N/A';
                  
                  if (lastReport) {
                      const lastInboundReport = lastReport.get(report.id);
                      if (lastInboundReport && typeof lastInboundReport.bytesReceived === 'number') {
                          const bytesReceived = report.bytesReceived - lastInboundReport.bytesReceived;
                          dataToRecord.bitrateReceived_kbps = Math.round((Math.max(0, bytesReceived) * 8) / 1000);
                      } else {
                          dataToRecord.bitrateReceived_kbps = 0;
                      }
                  } else {
                      dataToRecord.bitrateReceived_kbps = 0;
                  }
              }
          }
      });
      
      if (Object.keys(dataToRecord).length > 1) {
          recordedStats.push(dataToRecord);
          statsDisplay.textContent = `記録中... ${recordedStats.length} 個`;
      }

      lastReport = stats; // 次の計算のために現在のレポートを保持
  }, 1000);
}

function stopStatsRecording() {
  if (!isRecording) return;
  clearInterval(statsInterval);
  isRecording = false;
  lastReport = null; // 状態をリセット

  startStatsRecordingBtn.disabled = false;
  stopStatsRecordingBtn.disabled = true;
  // 修正箇所: recordedStatsの件数が0の場合にのみ、ボタンを無効化する
  downloadStatsBtn.disabled = recordedStats.length === 0;
  statsDisplay.textContent = `記録停止。合計 ${recordedStats.length} 件。`;
}

function downloadStatsAsCsv() {
  if (recordedStats.length === 0) return alert("ダウンロードするデータがありません。");

  const headerSet = new Set();
  recordedStats.forEach(row => {
    Object.keys(row).forEach(key => headerSet.add(key));
  });
  const headers = Array.from(headerSet);

  const csvRows = [headers.join(',')];

  recordedStats.forEach(row => {
      const values = headers.map(header => {
          const value = row[header] !== undefined ? row[header] : '';
          const stringValue = String(value);
          return stringValue.includes(',') ? `"${stringValue.replace(/"/g, '""')}"` : stringValue;
      });
      csvRows.push(values.join(','));
  });

  const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `webrtc_stats_${currentRole}_${new Date().toISOString().replace(/[:.]/g, '-')}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// --- UIイベントリスナー ---

roleInputs.forEach(input => {
  input.addEventListener("change", () => {
    currentRole = document.querySelector('input[name="role"]:checked').value;
    senderControls.style.display = currentRole === "sender" ? "block" : "none";
    receiverControls.style.display = currentRole === "receiver" ? "block" : "none";
    resetUI();
  });
});

copyCallIdBtn.onclick = () => {
  navigator.clipboard.writeText(callIdDisplay.textContent.trim())
    .then(() => {
      copyCallIdBtn.textContent = "コピー済み";
      setTimeout(() => { copyCallIdBtn.textContent = "コピー"; }, 1500);
    });
};

startCameraBtn.onclick = async () => {
  startCameraBtn.disabled = true;
  const constraints = { video: resolutions[resolutionSelect.value], audio: true };

  try {
      localStream = await navigator.mediaDevices.getUserMedia(constraints);
      localVideo.srcObject = localStream;
      localVideo.style.display = 'block';

      setupConnection();
      callDocRef = doc(collection(db, "calls"));
      offerCandidates = collection(callDocRef, "offerCandidates");
      answerCandidates = collection(callDocRef, "answerCandidates");

      localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));

      peerConnection.onicecandidate = event => {
        if (event.candidate) addDoc(offerCandidates, event.candidate.toJSON());
      };

      const offer = await peerConnection.createOffer();
      const modifiedSDP = preferCodec(offer.sdp, codecSelect.value);
      await peerConnection.setLocalDescription({ type: offer.type, sdp: modifiedSDP });
      await setDoc(callDocRef, { offer: { type: offer.type, sdp: modifiedSDP } });

      callIdDisplay.textContent = callDocRef.id;
      callControls.style.display = "block";

      onSnapshot(callDocRef, snapshot => {
        const data = snapshot.data();
        if (data?.answer && !peerConnection.currentRemoteDescription) {
          peerConnection.setRemoteDescription(new RTCSessionDescription(data.answer));
        }
      });
      
      onSnapshot(answerCandidates, snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === "added") peerConnection.addIceCandidate(new RTCIceCandidate(change.doc.data()));
        });
      });
  } catch (error) {
      console.error("カメラの開始エラー:", error);
      alert("カメラのアクセスに失敗しました。");
      resetUI();
  }
};

joinCallBtn.onclick = async () => {
  const callId = callIdInput.value.trim();
  if (!callId) return alert("Call ID を入力してください");
  joinCallBtn.disabled = true;

  try {
      callDocRef = doc(db, "calls", callId);
      const callData = (await getDoc(callDocRef)).data();

      if (callData?.offer) {
        offerCandidates = collection(callDocRef, "offerCandidates");
        answerCandidates = collection(callDocRef, "answerCandidates");
        setupConnection();

        peerConnection.ontrack = event => {
            const stream = event.streams[0];
            remoteVideo.srcObject = stream;

            remoteVideo.style.display = 'block';
            remoteVideo.style.position = 'fixed';
            remoteVideo.style.bottom = '20px';
            remoteVideo.style.left = '20px';
            remoteVideo.style.width = '240px';
            remoteVideo.style.height = 'auto';
            remoteVideo.style.border = '2px solid white';
            remoteVideo.style.zIndex = '1001';

            remoteVideo.onloadedmetadata = () => {
                remoteVideo.play().then(() => {
                    init3DView();
                    animate3DView();
                });
            };
        };

        peerConnection.onicecandidate = e => {
          if (e.candidate) addDoc(answerCandidates, e.candidate.toJSON());
        };

        await peerConnection.setRemoteDescription(new RTCSessionDescription(callData.offer));
        const answer = await peerConnection.createAnswer();
        await peerConnection.setLocalDescription(answer);
        await updateDoc(callDocRef, { answer });
        
        callIdDisplay.textContent = callDocRef.id;
        callControls.style.display = "block";

        onSnapshot(offerCandidates, snapshot => {
          snapshot.docChanges().forEach(change => {
            if (change.type === "added") peerConnection.addIceCandidate(new RTCIceCandidate(change.doc.data()));
          });
        });
      } else {
        alert("指定されたCall IDが見つかりません。");
        resetUI();
      }
  } catch (error) {
      console.error("通話への参加エラー:", error);
      alert("通話への参加に失敗しました。");
      resetUI();
  }
};

hangUpBtn.onclick = hangUp;
startStatsRecordingBtn.onclick = startStatsRecording;
stopStatsRecordingBtn.onclick = stopStatsRecording;
downloadStatsBtn.onclick = downloadStatsAsCsv;

// --- Three.js 関連関数 ---
function init3DView() {
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(0, 0, 0.1);
  scene = new THREE.Scene();

  const texture = new THREE.VideoTexture(remoteVideo);
  texture.colorSpace = THREE.SRGBColorSpace;

  const geometry = new THREE.SphereGeometry(100, 64, 64);
  geometry.scale(-1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ map: texture });
  scene.add(new THREE.Mesh(geometry, material));

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.style.zIndex = '1000'; // プレビューより後ろに表示
  document.body.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = true;
  controls.enablePan = false;
  
  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  if (camera && renderer) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

function animate3DView() {
  if (renderer) { 
    requestAnimationFrame(animate3DView);
    controls.update();
    renderer.render(scene, camera);
  }
}
