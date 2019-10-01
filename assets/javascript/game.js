//Array of letters to choose from
let randomLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Stats to zero
let wins = 0;
let losses = 0;
let guessesLeft = 10;
let guessesMade = [];
let userGuess = null;

//Program will choose random letter from array above and stored in variable compChoice
let compChoice = randomLetter[Math.floor(Math.random() * randomLetter.length)];

console.log(compChoice);

// Function to restart the stats
let restart = function () {
    guessesLeft = 10;
    guessesMade = [];
    userGuess = null;
    document.querySelector("#playerGuesses").innerHTML = userGuess;
    compChoice = randomLetter[Math.floor(Math.random() * randomLetter.length)];
}

//function for key presses
document.onkeyup = function () {

    //Player presses a key and the input is converted to lowercase and stored in the variable userGuess
    let userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    //Program console logs the player's guess
    console.log("The player guessed " + userGuess);


    //userGuess is compared to compChoice to check if same
    if (userGuess == compChoice) {
        console.log("Same letter chosen.");

        //win count goes up by one
        wins++;
        console.log("The user has won " + wins + " times.");

        //Call function to restart the stats
        restart();

        //Program console logs the next random letter
        console.log(compChoice);
    }

    //If not the same letter, program will console log as such
    else {
        console.log("Not the same letter chosen by the computer");

        //guessesMade goes up by 1, guessesLeft goes down by 1
        guessesMade++;
        guessesLeft--;

        //Program console logs how many guesses have been made and how many are left
        console.log("Player has guessed " + guessesMade + " times and has " + guessesLeft + " guesses left");

        //Program prints in playerGuesses span which keys have been pressed
        document.querySelector("#playerGuesses").innerHTML += userGuess + " ";

    //If player runs out of guesses (guessesLeft is at 0)
    if (guessesLeft == 0) {

            //Losses goes up by one
            losses++;

            //Program restarts the stats
            restart();

            //Program console logs the next random letter
            console.log(compChoice);
        }
    }

    //This will print the wins, losses, and guesses left to spans with corresponding IDs
    document.querySelector("#numWins").innerHTML = wins;
    document.querySelector("#numLosses").innerHTML = losses;
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
}