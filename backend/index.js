// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQxnXgXwW815XT983EePQ7Rj2GxJFPi60",
  authDomain: "fir-sign-app.firebaseapp.com",
  projectId: "fir-sign-app",
  storageBucket: "fir-sign-app.appspot.com",
  messagingSenderId: "363461619047",
  appId: "1:363461619047:web:57557dc0e0c671204a53c2",
  measurementId: "G-BXP4GVXQK1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth
const auth = getAuth(app);

export { db, auth };
