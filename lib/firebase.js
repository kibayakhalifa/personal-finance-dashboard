import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnV5x9WK0BvLlehzT3wZiJtsv9-ydvTN0",
  authDomain: "personal-finance-dashboa-e9583.firebaseapp.com",
  projectId: "personal-finance-dashboa-e9583",
  storageBucket: "personal-finance-dashboa-e9583.firebasestorage.app",
  messagingSenderId: "652583930332",
  appId: "1:652583930332:web:a2e45c85c501028c886719"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


