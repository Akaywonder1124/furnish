// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyB1hWvHUyeKSdt2L_AO-mS0jhN8e3_qMdI",
    authDomain: "furnish-b7be4.firebaseapp.com",
    projectId: "furnish-b7be4",
    storageBucket: "furnish-b7be4.appspot.com",
    messagingSenderId: "330100464279",
    appId: "1:330100464279:web:76aa0bf239bbb66c9067d2",
    measurementId: "G-NPMKHESPRW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export const auth = getAuth(app);
