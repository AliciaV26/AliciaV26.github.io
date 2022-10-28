
const firebaseConfig = {
  apiKey: "AIzaSyBOKVgioaZEz8Vo_oIJrkQD7szIWyn4wfI",
  authDomain: "museo-d2eda.firebaseapp.com",
  projectId: "museo-d2eda",
  storageBucket: "museo-d2eda.appspot.com",
  messagingSenderId: "647756464359",
  appId: "1:647756464359:web:5ae3968bebedc7b0ede242",
  measurementId: "G-7YWSEGN1RY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and Auth, get a reference to the service
const auth = firebase.auth();
const db = firebase.firestore();
