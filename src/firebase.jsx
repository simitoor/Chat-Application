import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJRfYaQpMdCEr4uMVkftrA0MoF7Q8jP4A",
  authDomain: "chatapps-7ca61.firebaseapp.com",
  projectId: "chatapps-7ca61",
  storageBucket: "chatapps-7ca61.appspot.com",
  messagingSenderId: "500110883702",
  appId: "1:500110883702:web:7706d374d83964943c5857",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
