import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJrihRBrs2bkw5SKb17d5MMeqHIpRsESU",
  authDomain: "iniciarsesion-c5a27.firebaseapp.com",
  projectId: "iniciarsesion-c5a27",
  storageBucket: "iniciarsesion-c5a27.appspot.com",
  messagingSenderId: "856462929662",
  appId: "1:856462929662:web:329187ee1c268f4020ffaf",
  measurementId: "G-B1J8T0LT39",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();


export { auth };
