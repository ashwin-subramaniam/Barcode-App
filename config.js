import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBQTJ1BFSnhJexU4ewRNiunqYAESUoLook",
  authDomain: "story-hub-35697.firebaseapp.com",
  databaseURL: "https://story-hub-35697.firebaseio.com",
  projectId: "story-hub-35697",
  storageBucket: "story-hub-35697.appspot.com",
  messagingSenderId: "979629213104",
  appId: "1:979629213104:web:aae9a68ccdcbe4a2484275",
  measurementId: "G-RWRMY8NS5Z"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();