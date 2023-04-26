
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASdGntAzCBMRRYz_LuuBrtOyz52RqNKAQ",
  authDomain: "fakeshop-ecommerce.firebaseapp.com",
  projectId: "fakeshop-ecommerce",
  storageBucket: "fakeshop-ecommerce.appspot.com",
  messagingSenderId: "780472689036",
  appId: "1:780472689036:web:035595cd4455bfa0dd36a9",
  measurementId: "G-FTDDWFP274"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);