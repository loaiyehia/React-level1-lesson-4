// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8mmwIbT0hcxsUj88yGcVDu5IBi5NVq0w",
  authDomain: "registration-25484.firebaseapp.com",
  projectId: "registration-25484",
  storageBucket: "registration-25484.appspot.com",
  messagingSenderId: "567515429070",
  appId: "1:567515429070:web:6a28d71b2c32aab639b89f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);