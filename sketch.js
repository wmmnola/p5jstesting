function setup() {
  // Initialize Firebase
}
var database;

function connectToFirebase() {
  var email = document.getElementById("1").value;
  var password = document.getElementById("2").value;
  var config = {
    apiKey: "AIzaSyBfbJ4HgT-rr3FCxOVsXMUkRDeywitRwO4",
    authDomain: "smartdatabase-266a9.firebaseapp.com",
    databaseURL: "https://smartdatabase-266a9.firebaseio.com",
    storageBucket: "smartdatabase-266a9.appspot.com",
    messagingSenderId: "866180427680"
  };

  firebase.initializeApp(config);
  console.log(firebase);
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(
    error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error.message);
    // ...
  });

  database = firebase.database();
  console.log(database);
  var ref = database.ref("smartdatabase-266a9");
  ref.on("value", gotData, errData);

}

function gotData(data) {
  console.log(data.val());
}

function errData(err) {
  console.log(err);
}

function draw() {

}
