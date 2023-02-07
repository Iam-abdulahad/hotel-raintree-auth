// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6XXU8LTApPOOHpTYpeYrzdbhqiY68RmQ",
  authDomain: "hotel-raintree-auth.firebaseapp.com",
  projectId: "hotel-raintree-auth",
  storageBucket: "hotel-raintree-auth.appspot.com",
  messagingSenderId: "401349689423",
  appId: "1:401349689423:web:d0173e8991d76c5e3baa3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;