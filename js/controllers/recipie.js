/*

 - Leggere il parametro DB
 - Richiedere al DB la ricetta relativa all'ID
 - Mostrare la ricetta nella view

*/
var db = firebase.firestore();

function loadRecipie(){
    var recipieId = getIdFromURL()
    db.collection('recipies')
        .doc(recipieId)
        .onSnapshot((doc) => {
            var recipie = doc.data();
            console.log(recipie);
        });
}

function getIdFromURL(){
    return findGetParameter('id');
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });

        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('myParam')


    return result;
}

/*
function addRecipie(recipie, recipieId){

    var title = recipie.name;
    console.log(title);
    $('#titolo').text(title);
}


var recipieRef = db.collection("recipies");

recipieRef.doc("SF").set({
    name: "ciao" 

});
*/




function addRecipie(recipie, recipieId){

    var title = recipie.name;
    var difficulty = recipie.difficulty;
    var description = recipie.description;
    var cookingTime = recipie.cookingTime;
    var preparationTime = recipie.preparationTime;
    var people = recipie.people;
    var cost = recipie.cost;

    console.log(title);
    $('#titolo').text(title);
    $('#difficulty').text('Difficoltà: ' + difficulty);
    $('#description').text(description);
    $('#cookingTime').text('Tempo di cottura: ' + cookingTime + ' minuti');
    $('#preparationTime').text('Tempo di preparazione: ' + preparationTime + ' minuti');
    $('#people').text('Dosi per: '+ people + ' persone');
    $('#cost').text('Costo: ' + cost);


/*
    var getData = db.collection("recipies").addRecipie();

    getData.get().then(function(addRecipie) {
        if (addRecipie.exists) {
            console.log("Document data:", addRecipie.data());
        } else {
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
 
*/

}





loadRecipie();