// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6SHWO_ykHdB1PT_v5XJ71RmL_cwRhbYk",
  authDomain: "prepwise-5fab4.firebaseapp.com",
  projectId: "prepwise-5fab4",
  storageBucket: "prepwise-5fab4.firebasestorage.app",
  messagingSenderId: "476475363963",
  appId: "1:476475363963:web:916616c508d4239cce88de",
  measurementId: "G-ZC6LH0PQH6",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
