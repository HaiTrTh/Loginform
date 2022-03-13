// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBon-lgrgNzB7ycFw_nrwFx2faTVoPGtjE",
//   authDomain: "test-firebase-eafa3.firebaseapp.com",
//   projectId: "test-firebase-eafa3",
//   storageBucket: "test-firebase-eafa3.appspot.com",
//   messagingSenderId: "773546453735",
//   appId: "1:773546453735:web:0bee17c177c9d4e51a9042",
//   measurementId: "G-LBXHGX2YHZ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
import { initializeApp } from 'firebase/app'
import {
  getAuth
} from 'firebase/auth'
import {
  getFirestore
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBon-lgrgNzB7ycFw_nrwFx2faTVoPGtjE",
  authDomain: "test-firebase-eafa3.firebaseapp.com",
  projectId: "test-firebase-eafa3",
  storageBucket: "test-firebase-eafa3.appspot.com",
  messagingSenderId: "773546453735",
  appId: "1:773546453735:web:0bee17c177c9d4e51a9042",
  measurementId: "G-LBXHGX2YHZ"
};

initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()

export { db, auth } 