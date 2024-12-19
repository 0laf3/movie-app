
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
  import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyABJiIsJFPbuYZn0TawvN_ZCkpZwgg0aVg",
    authDomain: "movie-app-dffd3.firebaseapp.com",
    projectId: "movie-app-dffd3",
    storageBucket: "movie-app-dffd3.firebasestorage.app",
    messagingSenderId: "202778227098",
    appId: "1:202778227098:web:662e31c628a17a76fe0a23"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function showMessage(message, divId){
    var messageDiv = document.getElementById(divId);
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(function(){
        messageDiv.style.opacity = 0;
    }, 5000)
  }

  const signUp = document.getElementById('submitSignUp');
  signUp.addEventListener('click', (Event)=>{
    Event.preventDefault();
    const email = document.getElementById('rEmail').value;
    const password = document.getElementById('rPassword').value;
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value
    
    const auth = getAuth(app);
    const db = getFirestore(app);

// create account
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{
        const user = userCredential.user;
        const userData = {
            email: email,
            firstName: firstName,
            lastName: lastName
        };
        showMessage('Account Created SuccessFully', 'signUpMessage');
        const docRef = doc(db, "users", user.uid);
        setDoc(docRef, userData). then(() =>{
            window.location.href = 'index.html';
        })
        .catch((error) =>{
            console.error("Error writing document", error)
        });
    })
    .catch((error) =>{
        const errorCode = error.code;
        if( errorCode =='auth/email-already-in-use'){
            showMessage('Email Address Already Exists!!!', 'signUpMessage');
        }
        else{
            showMessage('unable to create User', 'SignUpMessage');
        }
    })
  });

  // Login function

  const signIn = document.getElementById('submitSignIn');
  signIn.addEventListener('click', (event) =>{
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{
        showMessage('login successful', 'signInMessage');
        const user = userCredential.user;
        localStorage.setItem('loggedInUserId', user.uid);
        window.location.href = 'homepage.html';
    })
    .catch ((error) =>{
        const errorCode = error.code;
        if(errorCode ==='auth/invalid-credential'){
            showMessage('Incorrect Email or Password', 'signInMessage');
        }
        else{
            showMessage('Account does not Exist', 'signInMessage');
        }
    })
  })