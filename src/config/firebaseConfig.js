import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'

var firebaseConfig = {
    apiKey: "AIzaSyB4pJ9L7jrC3ERbs1pUyVU2AozRT5sOULM",
    authDomain: "dmovies-f5a22.firebaseapp.com",
    databaseURL: "https://dmovies-f5a22.firebaseio.com",
    projectId: "dmovies-f5a22",
    storageBucket: "dmovies-f5a22.appspot.com",
    messagingSenderId: "992046942238",
    appId: "1:992046942238:web:a36972f4834bc59590c60f",
    measurementId: "G-3HQ12XX7S8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const database = firebase.firestore();
  export default database;