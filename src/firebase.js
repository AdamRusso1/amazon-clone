// Import only what you need from Firebase v9+
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAb2z8Krikdttj1VzQBHVRb8bJ4NmAQAY0",
  authDomain: "challenge-db410.firebaseapp.com",
  projectId: "challenge-db410",
  storageBucket: "challenge-db410.firebasestorage.app",
  messagingSenderId: "289216728230",
  appId: "1:289216728230:web:6463038deea00c6ddff867",
  measurementId: "G-LJGWHX1D0Z",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
