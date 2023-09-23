// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDyK5aOB2rcin8nGu0FgKNa2wEOz3i608Y",
  authDomain: "photoapp-28666.firebaseapp.com",
  projectId: "photoapp-28666",
  storageBucket: "photoapp-28666.appspot.com",
  messagingSenderId: "399457180515",
  appId: "1:399457180515:web:d4257a9c67ddb97f6c1156"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)

