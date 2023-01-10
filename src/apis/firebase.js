// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//authentication
import { getAuth } from "firebase/auth"
//firebase database
import { getFirestore } from "firebase/firestore"
//firebase storage
import { getStorage } from "firebase/storage"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXXQHbatDPe52E5mHrU_mUoh71VhYcjHc",
  authDomain: "makemytravel-a74f1.firebaseapp.com",
  projectId: "makemytravel-a74f1",
  storageBucket: "makemytravel-a74f1.appspot.com",
  messagingSenderId: "997592091984",
  appId: "1:997592091984:web:83dfc7af71c124f11fb055",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export let auth = getAuth(firebaseApp);
export let db = getFirestore(firebaseApp);
export let storage = getStorage(firebaseApp);

export default firebaseApp;
