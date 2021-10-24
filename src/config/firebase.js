import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "@firebase/database";

const firebaseConfig =  {
  apiKey: "AIzaSyBTwr3qpFrO4OtwhSkF1NE9r1kSNFTugc8",
  authDomain: "govpostindia.firebaseapp.com",
  projectId: "govpostindia",
  storageBucket: "govpostindia.appspot.com",
  messagingSenderId: "727246075523",
  appId: "1:727246075523:web:ce7afbdc34c727c49d4db6",
  measurementId: "G-45X8HE8XGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  const  realDB = getDatabase(app)

  export default realDB;

