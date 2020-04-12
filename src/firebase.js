import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCqclHa9nWRDLuSgeSkGGaUTUHOurROanw",
    authDomain: "mercadodev-c70f7.firebaseapp.com",
    databaseURL: "https://mercadodev-c70f7.firebaseio.com",
    projectId: "mercadodev-c70f7",
    storageBucket: "mercadodev-c70f7.appspot.com",
    messagingSenderId: "466707936549",
    appId: "1:466707936549:web:ee5b3824b1f95b004b56cc"
  }

  firebase.initializeApp(firebaseConfig)

  export default firebase