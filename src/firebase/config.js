import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCjVHasoDtm6AzRcIenBJvqcqNgK1-I1lg",
  authDomain: "my-money-e1261.firebaseapp.com",
  projectId: "my-money-e1261",
  storageBucket: "my-money-e1261.firebasestorage.app",
  messagingSenderId: "366282289896",
  appId: "1:366282289896:web:c7702fb3c92822d09e0f5d"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export {projectFirestore , projectAuth}