var firebaseConfig = {
      apiKey: "AIzaSyCnKu24lQ3DMkr-kTBVqUmPSQOzBK29Q_0",
      authDomain: "let-s-chat-9ea24.firebaseapp.com",
      databaseURL: "https://let-s-chat-9ea24-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-9ea24",
      storageBucket: "let-s-chat-9ea24.appspot.com",
      messagingSenderId: "863472212630",
      appId: "1:863472212630:web:e53986cbb0f10e6ce8c0b7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="chat_room.html";
}
function redirectToRoomName (name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="chat_room.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
