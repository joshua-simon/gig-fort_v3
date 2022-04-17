import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDZliu6XN7E79xVr1KI8kpULt9_zBIkZWU",
    authDomain: "gig-fort-b774e.firebaseapp.com",
    projectId: "gig-fort-b774e",
    storageBucket: "gig-fort-b774e.appspot.com",
    messagingSenderId: "999248431613",
    appId: "1:999248431613:web:dd10019dd195b592777194"
  };

const firebase = Firebase.initializeApp(firebaseConfig);

const { FieldValue } = Firebase.firestore

export const auth = getAuth()

export {firebase, FieldValue}