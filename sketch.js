function setup() {
  createCanvas(400, 400);
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBfbJ4HgT-rr3FCxOVsXMUkRDeywitRwO4",
    authDomain: "smartdatabase-266a9.firebaseapp.com",
    databaseURL: "https://smartdatabase-266a9.firebaseio.com",
    storageBucket: "smartdatabase-266a9.appspot.com",
    messagingSenderId: "866180427680"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  var ref = database.ref("smartdatabase");
  ref.on("value", gotData, errData);
}

function gotData(data) {
  console.log(data.val());
}

function errData(err) {
  console.log(err);
}

function draw() {
  background(0);
  fill(255);
  line(10, 10, 20, 20);
}
