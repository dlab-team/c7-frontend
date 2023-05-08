// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDrPv7PzEiVw3t9vI81BGUgP1lFUBTIJM",
    authDomain: "devsafio-us.firebaseapp.com",
    projectId: "devsafio-us",
    storageBucket: "devsafio-us.appspot.com",
    messagingSenderId: "377347257592",
    appId: "1:377347257592:web:45a81af40226f97f58b70d",
    measurementId: "G-1VR36EJYBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);