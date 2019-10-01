//Computer chooses from array below
let randomLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Stats to zero
let wins = 0;
let losses = 0;
let guessesLeft = 10;
let guessesMade = [];
let userGuess = null;

//This will get the program to choose a random letter from the array above
let compChoice = randomLetter[Math.floor(Math.random() * randomLetter.length)];

console.log(compChoice);

// Function to restart the stats
let restart = function(){
    guessesLeft = 10;
    guessesMade = [];
    userGuess = null;
    document.querySelector("#playerGuesses").innerHTML = userGuess;
    compChoice = randomLetter[Math.floor(Math.random() * randomLetter.length)];
}

//function for key presses
document.onkeyup = function () {

//This is the player's choice and is stored in the variable
let userGuess = String.fromCharCode(event.keyCode).toLowerCase();
console.log("The player guessed " + userGuess);


    //Player's guess is compared to computer's choice
    if (userGuess == compChoice) {
        console.log("same");

        //win count
        wins++;
        console.log("The user has won " + wins + " times.");

        restart();

        console.log(compChoice);
    }

    //Player's guess is compared to computer's choice and is not a match
    else {
        console.log("different");
        guessesMade++;
        guessesLeft--;
        console.log(guessesMade);
        console.log(guessesLeft);

        //Player's key choice is displayed
        document.querySelector("#playerGuesses").innerHTML += userGuess + " ";
        console.log("the user has guessed a total of " + guessesMade + " times.");
            if (guessesLeft == 0){
                losses++;
                guessesLeft=9;
                userGuess = null;
                document.querySelector("#playerGuesses").innerHTML = userGuess;
            }
    }

    document.querySelector("#numWins").innerHTML = wins;
    document.querySelector("#numLosses").innerHTML = losses;
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
}