// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcVDvhpouNDCi_GEQCCEXEfUiOr0fzKBA",
  authDomain: "fir-practice-3ce3c.firebaseapp.com",
  projectId: "fir-practice-3ce3c",
  storageBucket: "fir-practice-3ce3c.firebasestorage.app",
  messagingSenderId: "282364780125",
  appId: "1:282364780125:web:ee7bb12860c639532eb7b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);