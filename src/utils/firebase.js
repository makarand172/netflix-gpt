// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyd-Qd_qEGh0zrcaFwezsDj-iUmlkRu8M",
  authDomain: "netflixgpt-75f06.firebaseapp.com",
  projectId: "netflixgpt-75f06",
  storageBucket: "netflixgpt-75f06.firebasestorage.app",
  messagingSenderId: "465828968618",
  appId: "1:465828968618:web:31da3a2dc1c67d9ad778d3",
  measurementId: "G-QGMF17W8SK",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
