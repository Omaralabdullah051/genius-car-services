// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjtUqTahF1SEDF9UYRhDJAn9CYPx4IQjE",
    authDomain: "genius-car-services-a2357.firebaseapp.com",
    projectId: "genius-car-services-a2357",
    storageBucket: "genius-car-services-a2357.appspot.com",
    messagingSenderId: "788221292875",
    appId: "1:788221292875:web:085c12075fcc45688d38ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;