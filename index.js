import firebaseApp from "./firebase.js";
console.log('hello world!');

import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
const auth = getAuth(firebaseApp);

// this is for when a user will sign up
document.getElementById('sign_up').addEventListener('click', ()=>{
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      console.log('created');
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById('message').innerText = errorCode + errorMessage;
      console.log(errorCode + errorMessage);

    });
})

// this is for when a user will sign in/ log in
document.getElementById('sign_in').addEventListener('click', ()=>{
  const email = document.getElementById('email').value;
  const password = document.getElementById('pass').value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('User has sign in');
    console.log(user.email);


  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById('message').innerText = errorCode + errorMessage;
    console.log(errorCode + errorMessage);

  });
})