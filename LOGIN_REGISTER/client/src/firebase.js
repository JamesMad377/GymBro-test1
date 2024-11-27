// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD77DfpPuKEZheRZmWY7Ko9Nz9bZ2c-_Wk",
  authDomain: "gymbros-test1-49eac.firebaseapp.com",
  projectId: "gymbros-test1-49eac",
  storageBucket: "gymbros-test1-49eac.firebasestorage.app",
  messagingSenderId: "1057874188548",
  appId: "1:1057874188548:web:d5fa7df90d6cb447349851"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Firebase Auth instance tied to the app
export const auth = getAuth(app);  // Explicitly passing the app instance to getAuth
export default app;
