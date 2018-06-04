var wins = 0;
var losses = 0;
var guesses = 10;
var guessLeft = 10;

var psychic = {
    // Letter Array
    letterList: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","w","z","x","v","y","u"],
    // Array to store Wrong Guesses
    playWrongGuesses : [],
    // Setting up var to store the guessed letter
    comGuess : ""
};

function initialize() {
    guessLeft = guesses;
    psychic.playWrongGuesses = [];
    psychic.comGuess =  psychic.letterList[Math.floor(Math.random()*psychic.letterList.length)];
};






    initialize();
console.log(psychic.comGuess);

document.onkeydown = function(event) {
 




    console.log(psychic.comGuess);

    if (psychic.comGuess === event.key ) {
       wins++
       $("#winorlose").text("You Win!")
       initialize();
       $("#lettersWrong").text(psychic.playWrongGuesses);

    }
    else { 
        psychic.playWrongGuesses.push(event.key);
        $("#lettersWrong").text(psychic.playWrongGuesses);
        guessLeft--
       
    }


    if (guessLeft <= 0) {
        losses++
        $("#winorlose").text("The Letter Was: " + psychic.comGuess )
        initialize();
        $("#lettersWrong").text(psychic.playWrongGuesses);
    }
    $("#winCount").text(wins);
    $("#lossCount").text(losses);
    $("#guessLeft").text(guessLeft);
}



