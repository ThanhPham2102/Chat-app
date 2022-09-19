// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { setActiveScreen } from "./view/index";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-9046I2saL3Hz2EaHyyJgNMP3IvtQAiQ",
  authDomain: "chat-app-152a9.firebaseapp.com",
  projectId: "chat-app-152a9",
  storageBucket: "chat-app-152a9.appspot.com",
  messagingSenderId: "1025680321066",
  appId: "1:1025680321066:web:e3c8922bce62603923b153",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// setActiveScreen("loginPage");
// setActiveScreen("chatPage");

setActiveScreen("registerPage");
// setActiveScreen("resetPass");
//
