import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAj9825nSbmOahYAprTomDQd4fZLzzk7F0",
    authDomain: "cedars-oxygen-8a47a.firebaseapp.com",
    databaseURL: "https://cedars-oxygen-8a47a.firebaseio.com",
    projectId: "cedars-oxygen-8a47a",
    storageBucket: "cedars-oxygen-8a47a.appspot.com",
    messagingSenderId: "99850231085",
    appId: "1:99850231085:web:7c0b01161ea3cbba5b47a4",
    measurementId: "G-02HDKCBZ5Z"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export default fire;