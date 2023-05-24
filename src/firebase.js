import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZy8z21kTOgayRXVNy696-JggPYYoWEEU",
  authDomain: "chat-app-84600.firebaseapp.com",
  projectId: "chat-app-84600",
  storageBucket: "chat-app-84600.appspot.com",
  messagingSenderId: "83432427245",
  appId: "1:83432427245:web:be802b0c9944d9f238c6e4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
