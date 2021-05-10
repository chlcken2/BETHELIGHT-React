import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APT_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyAd7OxQudsSaanFIMQGY0bfU3qlNqzIT4o",
  authDomain: "bethelight-2021v.firebaseapp.com",
  databaseURL: "https://bethelight-2021v-default-rtdb.firebaseio.com",
  projectId: "bethelight-2021v",
  storageBucket: "bethelight-2021v.appspot.com",
  messagingSenderId: "475042084581",
  appId: "1:475042084581:web:7ebebadc90cb5fc8cac60c",
  measurementId: "G-PVPJV36C0T",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const auth = firebase.auth;
export const database = firebase.database;
export const firebaseInstance = firebase; //노마드 코더 보고 추가 소셜

export default firebase;
// https://bethelight-2021v-default-rtdb.firebaseio.com/
