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
  
