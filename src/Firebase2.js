import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA8ZDN1wylrlv37Z4TdWKMBUUST_ffA_B4",
    authDomain: "nani-1fbcd.firebaseapp.com",
    databaseURL: "https://nani-1fbcd-default-rtdb.firebaseio.com",
    projectId: "nani-1fbcd",
    storageBucket: "nani-1fbcd.appspot.com",
    messagingSenderId: "678127202023",
    appId: "1:678127202023:web:53595b14f56d4f78563c42"
});

const db = firebaseApp.firestore();

export default db;