import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA8ZDN1wylrlv37Z4TdWKMBUUST_ffA_B4",
  authDomain: "nani-1fbcd.firebaseapp.com",
  projectId: "nani-1fbcd",
  storageBucket: "nani-1fbcd.appspot.com",
  messagingSenderId: "678127202023",
  appId: "1:678127202023:web:53595b14f56d4f78563c42"
}
;

  firebase.initializeApp(firebaseConfig);
  
  
export default firebase