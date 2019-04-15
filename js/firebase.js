// Initialize Firebase
var config = {
  apiKey: "AIzaSyBZTuvwzRn6G2pZYZtTXp9MReceYlD-Dfo",
  authDomain: "recepies-d822e.firebaseapp.com",
  databaseURL: "https://recepies-d822e.firebaseio.com",
  projectId: "recepies-d822e",
  storageBucket: "recepies-d822e.appspot.com",
  messagingSenderId: "478364802223"
};
firebase.initializeApp(config);


firebase.firestore().enablePersistence()
  .catch((err) => {
    console.log('Errore in firestore' + err);
  });