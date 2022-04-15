// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2SpG9OQTlWdUy0cOzMd2qhU7OmsKEjJo",
  authDomain: "ema-john-auth-simple-c5716.firebaseapp.com",
  projectId: "ema-john-auth-simple-c5716",
  storageBucket: "ema-john-auth-simple-c5716.appspot.com",
  messagingSenderId: "169260886635",
  appId: "1:169260886635:web:969c030e77fbaf731b9f2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;