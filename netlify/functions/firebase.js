const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDdE-k25JE8RpZLQ3zWQIASq94lYcAs9n8",
  authDomain: "kiei-451-33157.firebaseapp.com",
  databaseURL: "https://kiei-451-33157-default-rtdb.firebaseio.com",
  projectId: "kiei-451-33157",
  storageBucket: "kiei-451-33157.appspot.com",
  messagingSenderId: "167630194199",
  appId: "1:167630194199:web:14694fc8dba04e37283e52"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase