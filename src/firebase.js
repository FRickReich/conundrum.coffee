// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzJBiyaNsdOUIsxk4Y0cdG1Ao-xyz6F8s",
  authDomain: "conundrum-coffee.firebaseapp.com",
  projectId: "conundrum-coffee",
  storageBucket: "conundrum-coffee.appspot.com",
  messagingSenderId: "1080686492912",
  appId: "1:1080686492912:web:35a3de3ef48f7bce5f5635",
  measurementId: "G-2X3N2BFC25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
