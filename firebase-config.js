// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signOut 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  orderBy 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Credenciales oficiales de tu proyecto nexus-work-f0b34
const firebaseConfig = {
  apiKey: "AIzaSyAEQ5rlAQ7QL0rNrqL6QMb-ElbXE7rkMGo",
  authDomain: "nexus-work-f0b34.firebaseapp.com",
  projectId: "nexus-work-f0b34",
  storageBucket: "nexus-work-f0b34.firebasestorage.app",
  messagingSenderId: "940873505925",
  appId: "1:940873505925:web:acf2515017995f9c6dddec",
  measurementId: "G-WKKZZYCB9K"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy
};