// step - 1 initialize firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCWqN9L_oe3Rs3pBDvkJGGMFPA9c7nAc7I",
    authDomain: "learningfirebase-1cc50.firebaseapp.com",
    projectId: "learningfirebase-1cc50",
    storageBucket: "learningfirebase-1cc50.appspot.com",
    messagingSenderId: "78424571692",
    appId: "1:78424571692:web:e7b401b7d9991e6f90f689",
    measurementId: "G-DKZ429VWB1"
  };

  const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;