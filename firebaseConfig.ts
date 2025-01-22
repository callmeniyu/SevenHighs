// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Hb4G0qXBhaCBdV8D2Eg8QfVT00_VH78",
  authDomain: "sevenhighs-2ea03.firebaseapp.com",
  projectId: "sevenhighs-2ea03",
  storageBucket: "sevenhighs-2ea03.firebasestorage.app",
  messagingSenderId: "980874235596",
  appId: "1:980874235596:web:4d9dd53ba2d6403deefc69"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);