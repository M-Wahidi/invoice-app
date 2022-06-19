import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZljxbgZjfFZ8qfvSty-TikGRFEMMdfNQ",
  authDomain: "invoice-app-49961.firebaseapp.com",
  projectId: "invoice-app-49961",
  storageBucket: "invoice-app-49961.appspot.com",
  messagingSenderId: "1073301049399",
  appId: "1:1073301049399:web:3181975eac83c187e1afb2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
