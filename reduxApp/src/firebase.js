// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "redux-website-87ff3.firebaseapp.com",
  projectId: "redux-website-87ff3",
  storageBucket: "redux-website-87ff3.appspot.com",
  messagingSenderId: "620886570602",
  appId: "1:620886570602:web:00656d909a7b42cf433c13"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);