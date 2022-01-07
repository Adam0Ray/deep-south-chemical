import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDyo4OaEwu50sPVRSKcOpCw4rv7sbgUFwY",
    authDomain: "deep-south-chemical.firebaseapp.com",
    projectId: "deep-south-chemical",
    storageBucket: "deep-south-chemical.appspot.com",
    messagingSenderId: "21853238996",
    appId: "1:21853238996:web:240b57f549535afe50ad41",
    measurementId: "G-XP056JXKDG"
  };

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()
//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }