auth.onAuthStateChanged(user =>{
    if(user) {
        console.log('user logged in:', user);
    }
    else{
        console.log('user logged out', user);
    }
});

//Registar 
function sign_up(){
    
    email= document.getElementById("email").value;
    password= document.getElementById("password").value;


    //console.log(email, password);

    //sign up user
   auth.createUserWithEmailAndPassword(email, password)
   .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
    window.location.href = "/JS/index.html"
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  })
}

//Inicia sesión
function inicia(){

    email= document.getElementById("email").value;
    password= document.getElementById("password").value;

    //console.log(email, password);

    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
        window.location.href = "/JS/index.html"
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      })
}

//log out
function logout(){
  auth.signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}
