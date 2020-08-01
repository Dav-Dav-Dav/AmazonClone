import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAaXvg-kSp0wGTXh4cJ4Xzs6cuak18stuk",
  authDomain: "clone-8f0bc.firebaseapp.com",
  databaseURL: "https://clone-8f0bc.firebaseio.com",
  projectId: "clone-8f0bc",
  storageBucket: "clone-8f0bc.appspot.com",
  messagingSenderId: "446578394849",
  appId: "1:446578394849:web:e7c592b34e35489d7159a0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
