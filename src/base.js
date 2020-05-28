import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDFx3v0KQ6QpKxal34N_0bdw36wQDXIGDI",
  authDomain: "instatwitter-ee500.firebaseapp.com",
  databaseURL: "https://instatwitter-ee500.firebaseio.com",
  projectId: "instatwitter-ee500",
  storageBucket: "instatwitter-ee500.appspot.com",
  messagingSenderId: "1055277484773",
  appId: "1:1055277484773:web:8776b4a221d54f6969620c",
  measurementId: "G-DHF3ZXLTTP"
});

export default app;