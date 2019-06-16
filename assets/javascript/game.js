// is there an easier way to do this? lol
var keyChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessed = [];
var eachofLetters = null;

// Found equation for getting random item from array
var computerGuess = keyChoices[Math.floor(Math.random() * keyChoices.length)];

// Looked up document command for matching with html element

function numberGuessesLeft() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function farGuessesLeft() {
    document.querySelector("#guessed").innerHTML = "Your Guesses So Far : " + guessed.join(" ");
}
// tried to make function to make re-randomize after win. cant figure it out
function randomizeSample() {
    var computerGuess = keyChoices[Math.floor(Math.random() * keyChoices.length)];
}


numberGuessesLeft();

// restart function should reset to 9, reset guessed letters, and randomize comp again
function restart() {
    guessesLeft = 9;
    guessed = [];
    randomizeSample();

}

// main function when user pushes a key. restart function ran if win or loss
document.onkeyup = function (event) {
    guessesLeft--;

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    guessed.push(userGuess);
    numberGuessesLeft();
    farGuessesLeft();
    // win or loss
    if (userGuess === computerGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        restart();
    }
    else if (guessesLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
        restart();
    }
}
