const firebaseConfig = {
      apiKey: "AIzaSyCNu5Ftsj-bC8T7tRUxkkM8sdr1FCxO5cs",
      authDomain: "kwitterdatabase-8aed5.firebaseapp.com",
      databaseURL: "https://kwitterdatabase-8aed5-default-rtdb.firebaseio.com",
      projectId: "kwitterdatabase-8aed5",
      storageBucket: "kwitterdatabase-8aed5.appspot.com",
      messagingSenderId: "234042924467",
      appId: "1:234042924467:web:9d555f8f623104ac10bfc6"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
