// firebase-config.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// あなたのFirebaseプロジェクトの設定に書き換えてください
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
export const db = getFirestore(app);