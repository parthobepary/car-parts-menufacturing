// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVXBFHrSV1WzzG1i-MheAHPiSZ4nEgTvs",
  authDomain: "assignment-12-14077.firebaseapp.com",
  projectId: "assignment-12-14077",
  storageBucket: "assignment-12-14077.appspot.com",
  messagingSenderId: "376375090342",
  appId: "1:376375090342:web:c65e93d82023b3a57aa867",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
