// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore} from "firebase/firestore";
 // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5Zk3qaChjzV_IQFwZq3krYHYYSJXKQ40",
  authDomain: "react-practice-a658e.firebaseapp.com",
  databaseURL: "https://react-practice-a658e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-practice-a658e",
  storageBucket: "react-practice-a658e.firebasestorage.app",
  messagingSenderId: "273743860745",
  appId: "1:273743860745:web:f71fcb32df5734bb2494d8",
  measurementId: "G-0LS5CJXSZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };