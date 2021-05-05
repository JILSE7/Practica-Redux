import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDkTRLGeoF3Ut0x9eA8wgQl8Xa_3h9cOOI",
    authDomain: "react-app-cursos-17d69.firebaseapp.com",
    projectId: "react-app-cursos-17d69",
    storageBucket: "react-app-cursos-17d69.appspot.com",
    messagingSenderId: "78726051957",
    appId: "1:78726051957:web:0a9cc3bb5881b97b59a03c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Referencia a la bd
  const db = firebase.firestore();

  //Autenticacion con google
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();



  export{
      db,
      googleAuthProvider,
      firebase
  }