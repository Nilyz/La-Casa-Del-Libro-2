// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZnhnXiP4s3wwTxdc88C3DFHHMhlaSPio",
    authDomain: "casa-del-libro-b7009.firebaseapp.com",
    projectId: "casa-del-libro-b7009",
    storageBucket: "casa-del-libro-b7009.firebasestorage.app",
    messagingSenderId: "680730593681",
    appId: "1:680730593681:web:10d57361a64e9bc9077230",
    measurementId: "G-HF4HTYXQJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);