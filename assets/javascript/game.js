//Computer chooses from array below
let randomLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//This will get the program to choose a random letter from the array above
let compChoice = randomLetter[Math.floor(Math.random() * randomLetter.length)];

console.log(compChoice);

//Stats to zero
let wins = 0;
let losses = 0;
let guessesLeft = 9;
let guessesMade = [];
let userGuess = null;

let restart = function(){
    guessesLeft = 9;
    guessesMade = [];
    compChoice = randomLetter[Math.floor(Math.random() * randomLetter.length)];
}


//function for key presses
document.onkeyup = function () {

    //Player presses key, key stroke is stored to this variable
    var playerKey = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("The user guessed " + playerKey);

    //Player's guess is compared to computer's choice
    if (playerKey == compChoice) {
        console.log("same");

        //win count
        wins++;
        console.log("The user has won " + wins + " times.");

        //reset numGuesses count to 9
        guessesLeft = 9;

        restart();

        console.log(compChoice);
    }
}