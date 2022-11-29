import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDUhW3WMvPpIYT5w5DFnRHVogchNqIej3k",
  authDomain: "sandeep1629-e4e7e.firebaseapp.com",
  projectId: "sandeep1629-e4e7e",
  storageBucket: "sandeep1629-e4e7e.appspot.com",
  messagingSenderId: "72387496413",
  appId: "1:72387496413:web:9f3889d3ee744305880e34"
}
;

  firebase.initializeApp(firebaseConfig);
  
export default firebase