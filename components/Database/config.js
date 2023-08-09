// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { AppRegistry } from 'react-native';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDlRsTETuZg7_UvmyVERSG21TZaZIK5bb0",
  authDomain: "recipe-app-9d171.firebaseapp.com",
  projectId: "recipe-app-9d171",
  storageBucket: "recipe-app-9d171.appspot.com",
  messagingSenderId: "719631933303",
  appId: "1:719631933303:web:a2f2ee0e353d5a5c228b72"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
