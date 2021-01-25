import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGyZu0Adliefy_YgnNeEcgqFe0ByI_ySc",
    authDomain: "clone-9254b.firebaseapp.com",
    projectId: "clone-9254b",
    storageBucket: "clone-9254b.appspot.com",
    messagingSenderId: "778481396823",
    appId: "1:778481396823:web:f6c8a6f9d28d8284788712",
    measurementId: "G-ZH3HV77GCM"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  const auth = firebase.auth()


  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, auth, provider}