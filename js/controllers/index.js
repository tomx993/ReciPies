/*
 - ottenere lista ricette database
 - per ogni ricetta: 
    - creare un elemento completo HTML da apporre nell pagina
    - completare le informazioni dell'elemento dall'oggetto ricevuto da DB
    - apporlo in pagina
*/

var db = firebase.firestore();

db.collection('recipies').get().then(function(snapshot){

    console.log("Datas Snapshot:", snapshot );

    snapshot.forEach(function(item){
        console.log("Elements data: ", item.data());
        var recipieElementFromDB = item.data();
        addRecipie(recipieElementFromDB);
    })

});

function addRecipie(recipieItem){

    var $sourceElement = $('#recipie_source_container .recipie_source');
    var $newElement = $sourceElement.clone();

    var title = recipieItem.name;
    $newElement.find('h4.card-title a').text(title);

    $('#recipie_list_container').append($newElement);
}


