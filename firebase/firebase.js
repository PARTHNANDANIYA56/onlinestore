// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDAl6Ay7jltDs-F037ygM6OshXtVAh0wTA",
    authDomain: "pn-online-88648.firebaseapp.com",
    projectId: "pn-online-88648",
    storageBucket: "pn-online-88648.appspot.com",
    messagingSenderId: "1087761332533",
    appId: "1:1087761332533:web:a37dc4a00c037604f4747c",
    measurementId: "G-0PRD950J6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)