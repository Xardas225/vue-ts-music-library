// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRSSct475sRcCm5TvGFB3BwEww3oIO9lM",
  authDomain: "vue-firebase-61584.firebaseapp.com",
  projectId: "vue-firebase-61584",
  storageBucket: "vue-firebase-61584.appspot.com",
  messagingSenderId: "686006291507",
  appId: "1:686006291507:web:937999af63adff6d07a746"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
