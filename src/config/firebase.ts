import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDoBE2y7utTXzeTCNvcnqlPx6p9-ufU4Y",
  authDomain: "meal-app-8e481.firebaseapp.com",
  projectId: "meal-app-8e481",
  storageBucket: "meal-app-8e481.appspot.com",
  messagingSenderId: "994129062977",
  appId: "1:994129062977:web:1768c6f48e6ba0a106eac0",
  measurementId: "G-GW5VC15PZJ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
