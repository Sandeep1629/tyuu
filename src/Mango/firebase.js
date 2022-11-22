// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkOOAktCopLLfuyA8awdPlr3oy1ZOy0Xs",
  authDomain: "otp-app-sdp.firebaseapp.com",
  projectId: "otp-app-sdp",
  storageBucket: "otp-app-sdp.appspot.com",
  messagingSenderId: "121140224413",
  appId: "1:121140224413:web:a786593b47df626c874f74"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app