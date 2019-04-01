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
    return result;
}



loadRecipie();