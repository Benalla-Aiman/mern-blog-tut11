// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-mern-e0e8e.firebaseapp.com",
    projectId: "blog-mern-e0e8e",
    storageBucket: "blog-mern-e0e8e.appspot.com",
    messagingSenderId: "905603786733",
    appId: "1:905603786733:web:b64b1d48f357b0230a29e4"
  };
  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
