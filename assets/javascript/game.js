//Computer chooses from array below
let randomLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//This will get the program to choose a random letter from the array above
let compChoice = randomLetter[Math.floor(Math.random() * randomLetter.length)];

console.log(compChoice);

//Stats to zero
let numWins = 0;
let numLosses = 0;
let numGuesses = 9;
let playerGuesses = [];
let userGuess = null;

//function for key presses
document.onkeyup = function () {

    //Player presses key, key stroke is stored to this variable
    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("The user guessed " + userGuess);

    //Player's guess is compared to computer's choice
    if (playerGuess == compChoice) {
        console.log("same");

        //win count
        numWins++;
        console.log("The user has won " + numWins + " times.");

        //reset numGuesses count to 9
        numGuesses = 9;
    }
}