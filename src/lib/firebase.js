import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.AUTH_DOMAIN,
  projectId: import.meta.env.PROJECT_ID,
  storageBucket: import.meta.env.STORAGE_BUCKET,
  messagingSenderId: import.meta.env.STORAGE_BUCKET,
  appId: import.meta.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

// authDomain: "reactchatapp-fafa7.firebaseapp.com",
//   projectId: "reactchatapp-fafa7",
//   storageBucket: "reactchatapp-fafa7.appspot.com",
//   messagingSenderId: "1055044147542",
//   appId: "1:1055044147542:web:30e75836af8b8059ed1ef7"
