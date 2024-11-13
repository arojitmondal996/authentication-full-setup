// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDev_uR49fmdm48IyPgacOCCu8Yket51OU",
  authDomain: "authentication-full-setup.firebaseapp.com",
  projectId: "authentication-full-setup",
  storageBucket: "authentication-full-setup.firebasestorage.app",
  messagingSenderId: "596331317457",
  appId: "1:596331317457:web:445f1c66b2ac9599e3ddf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;