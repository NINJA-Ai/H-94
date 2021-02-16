
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyDBR6HtrFAN77Ofy5aY4Fx2eYCXzRYbtPY",
      authDomain: "project-38-lsgg.firebaseapp.com",
      databaseURL: "https://project-38-lsgg-default-rtdb.firebaseio.com",
      projectId: "project-38-lsgg",
      storageBucket: "project-38-lsgg.appspot.com",
      messagingSenderId: "854001694449",
      appId: "1:854001694449:web:3101d2a2fe8ad18336db50"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function room()
{
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name",room_name);
      window.location = "https://code.whitehatjr.com/s/dashboard";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
