var wins = 0;
var losses = 0;
var guesses = 10;
var guessLeft = 10;
var winorlose = $(".winorlose")

var psychic = {
    // Letter Array
    letterList: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","w","z","x","v","y","u"],
    // Array to store Wrong Guesses
    playWrongGuesses : [],
    // Setting up var to store the guessed letter
    comGuess : ""
};


//Function Resets Game and draws a random letter
function initialize() {
    guessLeft = guesses;
    psychic.playWrongGuesses = [];
    psychic.comGuess =  psychic.letterList[Math.floor(Math.random()*psychic.letterList.length)];
};


//Functions create Div when the player wins or loses that vanishes after 2 seconds.
function lossDiv() {
    var youLost = $("<div>");
    youLost.attr("class", "loss").text("The Letter was : " + psychic.comGuess)
    winorlose.prepend(youLost);
    $(".loss").delay(1000).animate({
        opacity : 0}, 1000, function(){
        $(".winorlose").empty()
    })
}

function winDiv() {
    var youWin = $("<div>");
    youWin.attr("class","win").text("You Win!");
    winorlose.prepend(youWin);
    $(".win").delay(1000).animate({
        opacity : 0}, 1000, function(){
        $(".winorlose").empty()
    })
}

//Initial comGuess draw
    initialize();

document.onkeydown = function(event) {
 
//If button is correct player wins
    if (psychic.comGuess === event.key ) {
       wins++
       winDiv();
       initialize();
       $("#lettersWrong").text(psychic.playWrongGuesses);

    }

//Else push letter to psychic.playWrongGuesses array and subtract a guess
    else { 
        psychic.playWrongGuesses.push(event.key);
        $("#lettersWrong").text(psychic.playWrongGuesses);
        guessLeft--
       
    }

//When the player has no guesses left they lose
    if (guessLeft <= 0) {
        losses++
        lossDiv();
        initialize();
       
        $("#lettersWrong").text(psychic.playWrongGuesses);
    }

//Updates stats after each button press
    $("#winCount").text(wins);
    $("#lossCount").text(losses);
    $("#guessLeft").text(guessLeft);
}



