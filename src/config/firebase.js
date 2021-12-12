import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, enableIndexedDbPersistence, CACHE_SIZE_UNLIMITED, } from "@firebase/firestore";

const firebaseConfig =  {
  apiKey: "AIzaSyBTwr3qpFrO4OtwhSkF1NE9r1kSNFTugc8",
  authDomain: "govpostindia.firebaseapp.com",
  projectId: "govpostindia",
  storageBucket: "govpostindia.appspot.com",
  messagingSenderId: "727246075523",
  appId: "1:727246075523:web:ce7afbdc34c727c49d4db6",
  measurementId: "G-45X8HE8XGN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)

enableIndexedDbPersistence(db)
  .catch((err) => {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });


