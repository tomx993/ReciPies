// THIS SCRIPT MANAGES THE create.html

var db = firebase.firestore();

function saveRecipie(event){
    event.checkValidity();


    var currentRecipie = {};
    Object.assign(currentRecipie, recipie);

    currentRecipie.name = $('#name').val();
    currentRecipie.people = $('#people').val();
    currentRecipie.preparationTime = $('#preparationTime').val();
    currentRecipie.cookingTime = $('#cookingTime').val();
    currentRecipie.difficulty = $('#difficulty').val();
    currentRecipie.cost = $('#cost').val();
    currentRecipie.description = $('#description').val();

    console.log(currentRecipie);


    db.collection('recipies')
    .doc()
    .set(currentRecipie)
    .then(function() {
        console.log("Document successfully written!");
        alert('Yes :)')
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });

    return false;

}

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});


$(document).ready(function(){
    var options = {
        max_value: 6,
        step_size: 0.5,
        selected_symbol_type: 'hearts',
        url: 'http://localhost/test.php',
        initial_value: 3,
        update_input_field_name: $("#input2"),
    }
    $(".rate").rate();
});

