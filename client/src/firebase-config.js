import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCOzvLk4k-GDnjEnfBuhKn-TM7L_rPQ0X8",
  authDomain: "dronuts-2a70a.firebaseapp.com",
  databaseURL: "https://dronuts-2a70a.firebaseio.com",
  projectId: "dronuts-2a70a",
  storageBucket: "dronuts-2a70a.appspot.com",
  messagingSenderId: "914681579838"
};


export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
