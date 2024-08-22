// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6OG4hVI0UvMPwFavedceSVuSeTPR5c3A",
  authDomain: "homejobconnect-c6452.firebaseapp.com",
  projectId: "homejobconnect-c6452",
  storageBucket: "homejobconnect-c6452.appspot.com",
  messagingSenderId: "333016075577",
  appId: "1:333016075577:web:8d48b20fcb9c4c3ffaece8",
  measurementId: "G-ZDLLNNL1FH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);