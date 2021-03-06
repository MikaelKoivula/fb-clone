import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAmH8XTCzWsRxbTpIWFyViZnVGQVSQCZWc",
  authDomain: "fb-clone-54fe0.firebaseapp.com",
  databaseURL: "https://fb-clone-54fe0.firebaseio.com",
  projectId: "fb-clone-54fe0",
  storageBucket: "fb-clone-54fe0.appspot.com",
  messagingSenderId: "633421381663",
  appId: "1:633421381663:web:cafa5e9cd6a295703b552a",
  measurementId: "G-K12WE3Y0H3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;