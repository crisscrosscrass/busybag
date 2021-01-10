import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
    // apiKey: "AIzaSyAPyppmyjBKQjIS4o1nRk6N-UxkW54rFPA",
    // authDomain: "busybag-f27f9.firebaseapp.com",
    // projectId: "busybag-f27f9",
    // storageBucket: "busybag-f27f9.appspot.com",
    // messagingSenderId: "622475419405",
    // appId: "1:622475419405:web:d8022f00e74e3ede131a44"
})

export const auth = app.auth()
export const provider = new firebase.auth.GoogleAuthProvider();
export const firestore = app.firestore()
export default app