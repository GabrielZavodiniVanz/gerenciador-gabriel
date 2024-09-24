// src/services/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDiTjoIS4nPxW82wj8fCVxa61IPTSNClfE",
  authDomain: "gerenciadorvanz-e4fb1.firebaseapp.com",
  projectId: "gerenciadorvanz-e4fb1",
  storageBucket: "gerenciadorvanz-e4fb1.appspot.com",
  messagingSenderId: "793532915377",
  appId: "1:793532915377:web:f2827005ebc17232b3cc90",
  measurementId: "G-Y9K0R7QXJN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword };
