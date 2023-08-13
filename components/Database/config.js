// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB-z9NAypbU7vQJ8ouFKnR2EKJ8YKgOYEQ",
  authDomain: "recipeapp-b833e.firebaseapp.com",
  projectId: "recipeapp-b833e",
  storageBucket: "recipeapp-b833e.appspot.com",
  messagingSenderId: "457401660257",
  appId: "1:457401660257:web:762b3e1f71f3c634e0cb20"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
