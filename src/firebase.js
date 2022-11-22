import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBq1AV3HvM-HCffJJxUAMPyI2jDi9oC7ms",
  authDomain: "otpsdp-39113.firebaseapp.com",
  projectId: "otpsdp-39113",
  storageBucket: "otpsdp-39113.appspot.com",
  messagingSenderId: "939189718053",
  appId: "1:939189718053:web:31fb926b29062f2dfc03cc"
}
;
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
