import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getPerformance } from "firebase/performance";
import {
    getFirestore,
    // query,
    // getDocs,
    // collection,
    // where,
    // addDoc
} from "firebase/firestore";

const firebaseConfig =
{
    apiKey: "AIzaSyAzJBiyaNsdOUIsxk4Y0cdG1Ao-xyz6F8s",
    authDomain: "conundrum-coffee.firebaseapp.com",
    projectId: "conundrum-coffee",
    storageBucket: "conundrum-coffee.appspot.com",
    messagingSenderId: "1080686492912",
    appId: "1:1080686492912:web:35a3de3ef48f7bce5f5635",
    databaseURL: "https://conundrum-coffee-default-rtdb.firebaseio.com/",
    measurementId: "G-2X3N2BFC25"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const perf = getPerformance(app);
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;
