import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {

    apiKey: "AIzaSyABOBN4Sdz5z2NCdr3I1ft3Q0Ookr8S1P8",
  
    authDomain: "made2automate-94329.firebaseapp.com",
  
    projectId: "made2automate-94329",
  
    storageBucket: "made2automate-94329.appspot.com",
  
    messagingSenderId: "502989768645",
  
    appId: "1:502989768645:web:d16c9aaba836c5de77edac"
  
  };
  
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);