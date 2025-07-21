/**
 * WebRTC 360度映像ストリーミング アプリケーション
 *
 * このコードは以下の役割に分かれています。
 * 1. 初期設定: Firebase, Three.js のインポート、定数、グローバル変数の定義
 * 2. DOM要素の取得: HTML要素への参照をまとめて取得
 * 3. UI制御: 画面要素の表示/非表示やリセットなど、UIに関する操作
 * 4. 3Dビューワー (Three.js): 360度映像を表示するためのロジック
 * 5. 統計情報 (WebRTC Stats): 通信品質の統計情報を記録・処理するロジック
 * 6. WebRTCコアロジック: PeerConnectionの確立、シグナリング、通話の開始・終了処理
 * 7. 初期化処理: イベントリスナーの設定とアプリケーションの開始
 */

import { db } from "./firebase-config.js";
import {
  collection, doc, setDoc, getDoc, onSnapshot, addDoc, updateDoc, deleteDoc
} from "firebase/firestore";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// ========================================================================
// 1. 初期設定 (定数, グローバル変数)
// ========================================================================

const PEER_CONNECTION_CONFIG = {
  iceServers: [
      { urls: "stun:stun.relay.metered.ca:80" },
      { urls: "turn:a.relay.metered.ca:80", username: "3c2899b6892a0dd428438fa2", credential: "UjVDP6QSI1bu0yiq" },
      { urls: "turn:a.relay.metered.ca:80?transport=tcp", username: "3c2899b6892a0dd428438fa2", credential: "UjVDP6QSI1bu0yiq" },
      { urls: "turn:a.relay.metered.ca:443", username: "3c2899b6892a0dd428438fa2", credential: "UjVDP6QSI1bu0yiq" },
      { urls: "turn:a.relay.metered.ca:443?transport=tcp", username: "3c2899b6892a0dd428438fa2", credential: "UjVDP6QSI1bu0yiq" },
  ],
  iceCandidatePoolSize: 10,
};

const RESOLUTIONS = {
  fourK: { width: 3840, height: 1920 }
};

// --- グローバル変数 ---
let peerConnection;
let localStream;
let callDocRef, offerCandidates, answerCandidates;
let currentRole = "sender";
let statsInterval;
let recordedStats = [];
let isRecording = false;
let lastReport = null;

// --- 3Dビューワー関連 ---
let camera, scene, renderer, controls;


// ========================================================================
// 2. DOM要素の取得
// ========================================================================

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


// ========================================================================
// 3. UI制御
// ========================================================================

/**
 * 役割（送信者/受信者）に基づいてUIの表示を切り替える
 */
function updateRoleUI() {
  currentRole = document.querySelector('input[name="role"]:checked').value;
  senderControls.style.display = currentRole === "sender" ? "block" : "none";
  receiverControls.style.display = currentRole === "receiver" ? "block" : "none";
  resetUI();
}

/**
 * UIの状態を初期状態にリセットする
 */
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
    if (renderer.domElement.parentNode) {
      document.body.removeChild(renderer.domElement);
    }
    renderer = null; camera = null; scene = null; controls = null;
  }

  // 統計情報UIのリセット
  statsDisplay.textContent = "";
  recordedStats = [];
  isRecording = false;
  lastReport = null;
  startStatsRecordingBtn.disabled = false;
  stopStatsRecordingBtn.disabled = true;
  downloadStatsBtn.disabled = true;
}

/**
 * Call IDをクリップボードにコピーする
 */
function copyCallIdToClipboard() {
  navigator.clipboard.writeText(callIdDisplay.textContent.trim())
    .then(() => {
      copyCallIdBtn.textContent = "コピー済み";
      setTimeout(() => { copyCallIdBtn.textContent = "コピー"; }, 1500);
    });
}


// ========================================================================
// 4. 3Dビューワー (Three.js)
// ========================================================================

/**
 * Three.jsを用いた3Dビューワーを初期化する
 */
function init3DView() {
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(0, 0, 0.1);
  scene = new THREE.Scene();

  const texture = new THREE.VideoTexture(remoteVideo);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  renderer = new THREE.WebGLRenderer();
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

  const geometry = new THREE.SphereGeometry(100, 64, 64);
  geometry.scale(-1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ map: texture });
  scene.add(new THREE.Mesh(geometry, material));

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.style.zIndex = '1000';
  document.body.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = true;
  controls.zoomSpeed = 5.0;
  controls.minDistance = 1;
  controls.maxDistance = 100;
  controls.enablePan = false;

  window.addEventListener('resize', onWindowResize, false);
  animate3DView();
}

/**
 * 3Dビューワーのアニメーションループ
 */
function animate3DView() {
  if (!renderer) return;
  requestAnimationFrame(animate3DView);
  controls.update();
  renderer.render(scene, camera);
}

/**
 * ウィンドウリサイズ時の処理
 */
function onWindowResize() {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}


// ========================================================================
// 5. 統計情報 (WebRTC Stats)
// ========================================================================

/**
 * 統計情報の記録を開始する
 */
function startStatsRecording() {
  if (!peerConnection || isRecording) return;
  isRecording = true;
  recordedStats = [];
  lastReport = null;

  startStatsRecordingBtn.disabled = true;
  stopStatsRecordingBtn.disabled = false;
  downloadStatsBtn.disabled = true;
  statsDisplay.textContent = "記録中...";

  statsInterval = setInterval(async () => {
    if (!peerConnection) return;
    const stats = await peerConnection.getStats();
    processStatsReport(stats);
    lastReport = stats;
  }, 1000);
}

/**
 * 取得した統計レポートを処理し、記録用データを作成する
 * @param {RTCStatsReport} stats - peerConnection.getStats() から取得したレポート
 */
function processStatsReport(stats) {
  const dataToRecord = { timestamp: new Date().toISOString() };

  if (currentRole === "sender") {
    // 送信側の統計情報を抽出
    stats.forEach(report => {
        // 送信映像品質
        if (report.type === 'outbound-rtp' && report.mediaType === 'video') {
            const last = lastReport?.get(report.id);
            Object.assign(dataToRecord, {
                sent_resolution: `${report.frameWidth}x${report.frameHeight}`,
                sent_fps: report.framesPerSecond,
                sent_bitrate_kbps: Math.round((Math.max(0, report.bytesSent - (last?.bytesSent ?? 0)) * 8) / 1000),
                packets_sent_per_second: Math.max(0, report.packetsSent - (last?.packetsSent ?? 0)),
                total_encode_time_s: report.totalEncodeTime,
                keyframes_encoded: report.keyFramesEncoded,
                quality_limitation_reason: report.qualityLimitationReason,
                quality_limitation_resolution_changes: report.qualityLimitationResolutionChanges,
                retransmitted_packets_sent: report.retransmittedPacketsSent,
                nack_count: report.nackCount,
            });
        }
        // 受信側からのフィードバック
        if (report.type === 'remote-inbound-rtp' && report.mediaType === 'video') {
            Object.assign(dataToRecord, {
                receiver_jitter_ms: (report.jitter * 1000)?.toFixed(4) ?? 'N/A',
                receiver_packets_lost: report.packetsLost,
                receiver_fraction_lost: report.fractionLost,
                rtt_rtcp_ms: (report.roundTripTime * 1000)?.toFixed(4) ?? 'N/A',
            });
        }
        // 接続品質
        if (report.type === 'candidate-pair' && report.nominated && report.state === 'succeeded') {
            Object.assign(dataToRecord, {
                available_outgoing_bitrate_kbps: report.availableOutgoingBitrate ? Math.round(report.availableOutgoingBitrate / 1000) : 'N/A',
                rtt_ice_ms: (report.currentRoundTripTime * 1000)?.toFixed(4) ?? 'N/A',
            });
        }
    });
  } else { // 受信側の統計情報を抽出
    stats.forEach(report => {
        if (report.type === 'inbound-rtp' && report.mediaType === 'video') {
            const last = lastReport?.get(report.id);
            Object.assign(dataToRecord, {
                received_resolution: `${report.frameWidth}x${report.frameHeight}`,
                received_fps: report.framesPerSecond,
                received_bitrate_kbps: Math.round((Math.max(0, report.bytesReceived - (last?.bytesReceived ?? 0)) * 8) / 1000),
                packets_received_per_second: Math.max(0, report.packetsReceived - (last?.packetsReceived ?? 0)),
                jitter_ms: (report.jitter * 1000)?.toFixed(4) ?? 'N/A',
                packets_lost: report.packetsLost,
                frames_dropped: report.framesDropped,
                total_decode_time_s: report.totalDecodeTime,
                keyframes_decoded: report.keyFramesDecoded,
                jitter_buffer_delay_s: report.jitterBufferDelay,
                fir_count: report.firCount,
                pli_count: report.pliCount,
                jitter_buffer_emitted_count: report.jitterBufferEmittedCount,
            });
        }
    });
  }

  // タイムスタンプ以外のデータがあれば記録
  if (Object.keys(dataToRecord).length > 1) {
    recordedStats.push(dataToRecord);
    statsDisplay.textContent = `記録中... ${recordedStats.length} 個`;
  }
}

/**
 * 統計情報の記録を停止する
 */
function stopStatsRecording() {
  if (!isRecording) return;
  clearInterval(statsInterval);
  isRecording = false;
  lastReport = null;

  startStatsRecordingBtn.disabled = false;
  stopStatsRecordingBtn.disabled = true;
  downloadStatsBtn.disabled = recordedStats.length === 0;
  statsDisplay.textContent = `記録停止。合計 ${recordedStats.length} 件。`;
}

/**
 * 記録した統計情報をCSV形式でダウンロードする
 */
function downloadStatsAsCsv() {
  if (recordedStats.length === 0) {
    return alert("ダウンロードするデータがありません。");
  }
  // 全データからヘッダーを動的に生成
  const headerSet = new Set();
  recordedStats.forEach(row => Object.keys(row).forEach(key => headerSet.add(key)));
  const headers = Array.from(headerSet);

  const csvRows = [
    headers.join(','), // ヘッダー行
    ...recordedStats.map(row =>
      headers.map(header => {
        const value = row[header] !== undefined ? row[header] : '';
        const stringValue = String(value);
        return stringValue.includes(',') ? `"${stringValue.replace(/"/g, '""')}"` : stringValue;
      }).join(',')
    )
  ];

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


// ========================================================================
// 6. WebRTCコアロジック
// ========================================================================

/**
 * RTCPeerConnectionを初期化し、イベントハンドラを設定する
 */
function initializePeerConnection() {
  peerConnection = new RTCPeerConnection(PEER_CONNECTION_CONFIG);

  peerConnection.onconnectionstatechange = () => {
    const state = peerConnection.connectionState;
    if (state === 'connected') {
        statsControls.style.display = 'block';
    } else if (['disconnected', 'failed', 'closed'].includes(state)) {
        statsControls.style.display = 'none';
        stopStatsRecording();
    }
  };
}

/**
 * SDPを操作して優先コーデックを設定する
 * @param {string} sdp - セッション記述プロトコル
 * @param {string} codecName - 優先するコーデック名 (例: 'H264', 'VP9')
 * @returns {string} - 変更後のSDP
 */
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

/**
 * 通話を終了し、リソースを解放する
 */
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
    await deleteDoc(callDocRef).catch(e => console.error("ドキュメント削除エラー: ", e));
    callDocRef = null;
  }
  resetUI();
}

/**
 * [送信者] カメラを開始し、通話を開始（Offerを作成）する
 */
async function startCall() {
  startCameraBtn.disabled = true;
  const constraints = { video: RESOLUTIONS[resolutionSelect.value], audio: true };

  try {
    // 1. メディアストリーム取得
    localStream = await navigator.mediaDevices.getUserMedia(constraints);
    localVideo.srcObject = localStream;
    localVideo.style.display = 'block';

    // 2. PeerConnection設定
    initializePeerConnection();
    localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));

    // 3. Firestoreシグナリング設定
    callDocRef = doc(collection(db, "calls"));
    offerCandidates = collection(callDocRef, "offerCandidates");
    answerCandidates = collection(callDocRef, "answerCandidates");
    callIdDisplay.textContent = callDocRef.id;

    // 4. ICE Candidateのハンドリング
    peerConnection.onicecandidate = event => {
      if (event.candidate) addDoc(offerCandidates, event.candidate.toJSON());
    };

    // 5. Offerの作成と送信
    const offerDescription = await peerConnection.createOffer();
    const modifiedSdp = preferCodec(offerDescription.sdp, codecSelect.value);
    const offer = { type: offerDescription.type, sdp: modifiedSdp };
    await peerConnection.setLocalDescription(offer);
    await setDoc(callDocRef, { offer });

    // 6. Answerの待受
    onSnapshot(callDocRef, snapshot => {
      const data = snapshot.data();
      if (data?.answer && !peerConnection.currentRemoteDescription) {
        peerConnection.setRemoteDescription(new RTCSessionDescription(data.answer));
      }
    });

    // 7. AnswererのICE Candidateの待受
    onSnapshot(answerCandidates, snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === "added") peerConnection.addIceCandidate(new RTCIceCandidate(change.doc.data()));
      });
    });

    callControls.style.display = "block";

  } catch (error) {
    console.error("カメラの開始または通話開始エラー:", error);
    alert("カメラへのアクセスまたは通話の開始に失敗しました。");
    resetUI();
  }
}

/**
 * [受信者] Call IDを使って通話に参加（Answerを作成）する
 */
async function joinCall() {
  const callId = callIdInput.value.trim();
  if (!callId) return alert("Call ID を入力してください");
  joinCallBtn.disabled = true;

  try {
    // 1. FirestoreからOfferを取得
    callDocRef = doc(db, "calls", callId);
    const callSnapshot = await getDoc(callDocRef);
    if (!callSnapshot.exists() || !callSnapshot.data().offer) {
        throw new Error("指定されたCall IDが見つからないか、Offerが存在しません。");
    }
    const offer = callSnapshot.data().offer;

    // 2. PeerConnection設定
    initializePeerConnection();
    offerCandidates = collection(callDocRef, "offerCandidates");
    answerCandidates = collection(callDocRef, "answerCandidates");

    // 3. リモートトラックのハンドリング
    peerConnection.ontrack = event => {
        remoteVideo.srcObject = event.streams[0];
        remoteVideo.style.display = 'block'; // 小画面表示スタイルはCSSで管理推奨
        remoteVideo.onloadedmetadata = () => {
            remoteVideo.play().then(init3DView);
        };
    };

    // 4. ICE Candidateのハンドリング
    peerConnection.onicecandidate = e => {
      if (e.candidate) addDoc(answerCandidates, e.candidate.toJSON());
    };

    // 5. Answerの作成と送信
    await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);
    await updateDoc(callDocRef, { answer });

    // 6. OffererのICE Candidateの待受
    onSnapshot(offerCandidates, snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === "added") peerConnection.addIceCandidate(new RTCIceCandidate(change.doc.data()));
      });
    });

    callIdDisplay.textContent = callDocRef.id;
    callControls.style.display = "block";

  } catch (error) {
    console.error("通話への参加エラー:", error);
    alert(`通話への参加に失敗しました: ${error.message}`);
    resetUI();
  }
}


// ========================================================================
// 7. 初期化処理
// ========================================================================

/**
 * すべてのイベントリスナーを設定する
 */
function setupEventListeners() {
  roleInputs.forEach(input => input.addEventListener("change", updateRoleUI));
  copyCallIdBtn.addEventListener("click", copyCallIdToClipboard);
  startCameraBtn.addEventListener("click", startCall);
  joinCallBtn.addEventListener("click", joinCall);
  hangUpBtn.addEventListener("click", hangUp);
  startStatsRecordingBtn.addEventListener("click", startStatsRecording);
  stopStatsRecordingBtn.addEventListener("click", stopStatsRecording);
  downloadStatsBtn.addEventListener("click", downloadStatsAsCsv);
}

/**
 * アプリケーションを初期化する
 */
function initializeApp() {
  setupEventListeners();
  updateRoleUI(); // 初期表示を設定
}

// --- アプリケーションのエントリーポイント ---
initializeApp();