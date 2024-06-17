// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsSSOp3F9vx_GCWt9_LHX8w0YAbBlqXQk",
  authDomain: "remembering-teresa.firebaseapp.com",
  projectId: "remembering-teresa",
  storageBucket: "remembering-teresa.appspot.com",
  messagingSenderId: "375384432399",
  appId: "1:375384432399:web:ea1cf117c8422357bea87a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);