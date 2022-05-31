// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNORSmMPyjOWgPYPcFWW1CHQRRQnnpsIA",
  authDomain: "react-fb-auth-f255c.firebaseapp.com",
  projectId: "react-fb-auth-f255c",
  storageBucket: "react-fb-auth-f255c.appspot.com",
  messagingSenderId: "774551779973",
  appId: "1:774551779973:web:c6030f2323070b6ef847ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)