import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCr3vRGaGrsHAmYCJuH11Od62fRvchN69U",
  authDomain: "netflix-clone-be39f.firebaseapp.com",
  projectId: "netflix-clone-be39f",
  storageBucket: "netflix-clone-be39f.appspot.com",
  messagingSenderId: "19483234419",
  appId: "1:19483234419:web:7dba7f9d046220ec0f9a06",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;