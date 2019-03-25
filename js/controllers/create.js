// THIS SCRIPT MANAGES THE create.html

var db = firebase.firestore();

function saveRecipie(event){
    event.preventDefault();


    var currentRecipie = {currentRecipie, recipie};
    Object.assign(currentRecipie);

    console.log(currentRecipie);

    currentRecipie.name = $('#name').val();
    currentRecipie.people = $('#people').val();
    currentRecipie.preparationTime = $('#preparationTime').val();
    currentRecipie.cookingTime = $('#cookingTime').val();
    currentRecipie.difficulty = $('#difficulty').val();
    currentRecipie.cost = $('#cost').val();
    currentRecipie.description = $('#description').val();

    db.collection('recipies')
    .doc()
    .set(currentRecipie)
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });

    return false;

}