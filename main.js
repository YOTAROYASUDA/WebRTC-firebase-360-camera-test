// imports for WebRTC
import './style.css';

// Firebase SDK v9 モジュールインポート形式
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  onSnapshot,
  addDoc
} from 'firebase/firestore';

// imports for three.js
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

let camera, scene, renderer, video;

const firebaseConfig = {
  apiKey: "AIzaSyCa2RAbKoz1Yq7MxFH2mC6aORNYoPq8FEM",
  authDomain: "test-5339c.firebaseapp.com",
  projectId: "test-5339c",
  storageBucket: "test-5339c.appspot.com",
  messagingSenderId: "906135165534",
  appId: "1:906135165534:web:0489a1620e90f1613732cf",
  measurementId: "G-Y58LXZJ671"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const servers = {
  iceServers: [
    { urls: "stun:stun.relay.metered.ca:80" },
  ],
  iceCandidatePoolSize: 10,
};

const pc = new RTCPeerConnection(servers);
let localStream = null;
let remoteStream = null;

const webcamButton = document.getElementById('webcamButton');
const webcamVideo = document.getElementById('webcamVideo');
const callButton = document.getElementById('callButton');
const callInput = document.getElementById('callInput');
const answerButton = document.getElementById('answerButton');
const remoteVideo = document.getElementById('remoteVideo');
const hangupButton = document.getElementById('hangupButton');

const senderButton = document.getElementById('senderButton');
const receiverButton = document.getElementById('receiverButton');
const lblocalStream = document.getElementById('locStream');
const lbremoteStream = document.getElementById('remStream');

let isSender = true;

function toggleBoolean() {
  isSender = !isSender;
}

senderButton.onclick = () => {
  receiverButton.disabled = true;
};

receiverButton.onclick = () => {
  toggleBoolean();
  senderButton.disabled = true;
};

webcamButton.onclick = async () => {
  if (isSender) {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

    localStream.getTracks().forEach((track) => {
      pc.addTrack(track, localStream);
    });

    webcamVideo.srcObject = localStream;
    callButton.disabled = false;
    answerButton.disabled = true;
    webcamButton.disabled = true;
    hangupButton.disabled = false;
    remoteVideo.style.display = 'none';
    lbremoteStream.style.display = 'none';
  } else {
    remoteStream = new MediaStream();
    pc.ontrack = (event) => {
      event.streams[0].getTracks().forEach((track) => {
        remoteStream.addTrack(track);
      });
    };
    remoteVideo.srcObject = remoteStream;
    remoteVideo.onloadedmetadata = () => {
      remoteVideo.play().catch(err => console.warn("video play error:", err));
    };

    callButton.disabled = true;
    answerButton.disabled = false;
    webcamButton.disabled = true;
    hangupButton.disabled = false;
    webcamVideo.style.display = 'none';
    lblocalStream.style.display = 'none';

    init();
    animate();
  }
};

callButton.onclick = async () => {
  const callDocRef = doc(collection(firestore, 'calls'));
  const offerCandidates = collection(callDocRef, 'offerCandidates');
  const answerCandidates = collection(callDocRef, 'answerCandidates');

  callInput.value = callDocRef.id;

  pc.onicecandidate = async (event) => {
    if (event.candidate) {
      await addDoc(offerCandidates, event.candidate.toJSON());
    }
  };

  const offerDescription = await pc.createOffer();
  await pc.setLocalDescription(offerDescription);

  const offer = {
    sdp: offerDescription.sdp,
    type: offerDescription.type
  };

  await setDoc(callDocRef, { offer });

  onSnapshot(callDocRef, (snapshot) => {
    const data = snapshot.data();
    if (!pc.currentRemoteDescription && data?.answer) {
      const answerDescription = new RTCSessionDescription(data.answer);
      pc.setRemoteDescription(answerDescription);
    }
  });

  onSnapshot(answerCandidates, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        const candidate = new RTCIceCandidate(change.doc.data());
        pc.addIceCandidate(candidate);
      }
    });
  });

  hangupButton.disabled = false;
};

answerButton.onclick = async () => {
  const callId = callInput.value;
  const callDocRef = doc(firestore, 'calls', callId);
  const answerCandidates = collection(callDocRef, 'answerCandidates');
  const offerCandidates = collection(callDocRef, 'offerCandidates');

  pc.onicecandidate = async (event) => {
    if (event.candidate) {
      await addDoc(answerCandidates, event.candidate.toJSON());
    }
  };

  const callData = (await getDoc(callDocRef)).data();

  const offerDescription = callData.offer;
  await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

  const answerDescription = await pc.createAnswer();
  await pc.setLocalDescription(answerDescription);

  const answer = {
    type: answerDescription.type,
    sdp: answerDescription.sdp
  };

  await updateDoc(callDocRef, { answer });

  onSnapshot(offerCandidates, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        const data = change.doc.data();
        pc.addIceCandidate(new RTCIceCandidate(data));
      }
    });
  });
};

hangupButton.onclick = () => {
  pc.close();
  hangupButton.textContent = 'CLOSED!!!';
  console.log("datachannel closed");
};

function init() {
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(0, 0, 0.1);
  scene = new THREE.Scene();

  video = document.getElementById('remoteVideo');

  const texture = new THREE.VideoTexture(video);
  texture.colorSpace = THREE.SRGBColorSpace;

  const geometry = new THREE.SphereGeometry(100, 32, 32, 0);
  geometry.scale(-1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = true;
  controls.enablePan = true;

  const clamp = (v, min, max) => Math.max(min, Math.min(v, max));
  renderer.domElement.addEventListener('wheel', e => {
    camera.fov = clamp(camera.fov + e.deltaY / 10, 10, 120);
    camera.updateProjectionMatrix();
  });

  window.addEventListener('resize', onWindowResize);

  video.play().catch(e => console.warn("video play error:", e));
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
