// Import the necessary Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD77DfpPuKEZheRZmWY7Ko9Nz9bZ2c-_Wk",
  authDomain: "gymbros-test1-49eac.firebaseapp.com",
  projectId: "gymbros-test1-49eac",
  storageBucket: "gymbros-test1-49eac.appspot.com",
  messagingSenderId: "1057874188548",
  appId: "1:1057874188548:web:d5fa7df90d6cb447349851"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services for use across the app
export const auth = getAuth(app);  // Firebase Authentication instance
export const db = getFirestore(app);  // Firestore Database instance

// Export the app instance if needed
export default app;
