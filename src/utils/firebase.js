// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdPvnW66lRb0Qscqe02DJApV3Y8UEB5Zw",
  authDomain: "netflixgpt-8bcd1.firebaseapp.com",
  projectId: "netflixgpt-8bcd1",
  storageBucket: "netflixgpt-8bcd1.appspot.com",
  messagingSenderId: "175881118460",
  appId: "1:175881118460:web:474aabbdcbd77d5a39ad79"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)