import firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhhrtXCE13CpV1gE-mNvJCvTtRb8YSD5k",
  authDomain: "ecommerce-e906b.firebaseapp.com",
  projectId: "ecommerce-e906b",
  storageBucket: "ecommerce-e906b.appspot.com",
  messagingSenderId: "841464341938",
  appId: "1:841464341938:web:7fee65f7adfa6d2b64b0ab",
};

const app = firebase.initializeApp(firebaseConfig);

export const getFireStore = () => {
  return firebase.firestore(app);
};
