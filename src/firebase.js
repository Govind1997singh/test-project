// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfgbqWjViw0KUwNsIxzDUyo9FYr2JJ7RA",
  authDomain: "eshop-40d05.firebaseapp.com",
  databaseURL: "https://eshop-40d05-default-rtdb.firebaseio.com",
  projectId: "eshop-40d05",
  storageBucket: "eshop-40d05.appspot.com",
  messagingSenderId: "994113645158",
  appId: "1:994113645158:web:c57ea8a1881130b08d1ba7",
  measurementId: "G-C396VS4SQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export {db}