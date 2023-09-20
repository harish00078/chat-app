// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtNM3y-5xEj14rYJdTqNkM4_g0ADAVn-0",
  authDomain: "chat-app-eef91.firebaseapp.com",
  projectId: "chat-app-eef91",
  storageBucket: "chat-app-eef91.appspot.com",
  messagingSenderId: "668798669606",
  appId: "1:668798669606:web:398e5c090b9adf6c3a67e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)