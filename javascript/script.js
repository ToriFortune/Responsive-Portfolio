// To store user input from contact page in firebase
var config = {
    apiKey: "AIzaSyCzuaWKD9yjl-eR-8Ict5y6Q-9UCWQmAKY",
    authDomain: "project-1-5dcbc.firebaseapp.com",
    databaseURL: "https://project-1-5dcbc.firebaseio.com",
    projectId: "project-1-5dcbc",
    storageBucket: "project-1-5dcbc.appspot.com",
    messagingSenderId: "212042728114"
  };
  console.log(config);
  firebase.initializeApp(config);


  var database = firebase.database();
// initial values
var name = "";
var email = "";
var message = "";  

// event.preventDefault(); do I need this
// need click event/button to save information
// need code for setting values in the database database.ref().set({
//     name: name;
//     email: email;
//     message: message;
// })

//   create variables to capture user input
var name = childSnapshot.val().name;
var email = childSnapshot.val().email;
var message = childSnapshot.val().message;
console.log(name);
console.log(email);
console.log(message);

