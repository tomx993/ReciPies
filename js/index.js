// JS for index

var db = firebase.firestore();

db.collection("recipies").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc);
    });
});