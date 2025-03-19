import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdKuPgykS4oHS3u_lUxpOK2nT7yXjPyNY",
    authDomain: "todo-167b5.firebaseapp.com",
    projectId: "todo-167b5",
    storageBucket: "todo-167b5.firebasestorage.app",
    messagingSenderId: "918939026908",
    appId: "1:918939026908:web:965433ec3863444db2bb19",
    measurementId: "G-946WV994VZ"
  };
  const app =  initializeApp(firebaseConfig); //initialize firebase
  const db = getFirestore(app);//initialize firestore
  export { db };