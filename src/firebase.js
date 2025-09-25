// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 
import {getFirestore} from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsQ79zwahPS5gWparL8Xwf5w0Kxam1Oi4",
  authDomain: "port1folio.firebaseapp.com",
  databaseURL: "https://port1folio-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "port1folio",
  storageBucket: "port1folio.firebasestorage.app",
  messagingSenderId: "803802908553",
  appId: "1:803802908553:web:4f3adafb9c530b653b8358",
  measurementId: "G-7HF0P3WQXN"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // ✅ Initialize Auth
const googleProvider = new GoogleAuthProvider();
const db = getDatabase(app);

// Export things you need
export { app, analytics, auth,googleProvider,db };