//Computer chooses from array below
let randomLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//This will get the program to choose a random letter from the array above
let compChoice = randomLetter[Math.floor(Math.random() * randomLetter.length)];


//Stats to zero
let numWins = 0;
let numLosses = 0;
let numGuesses = 9;
let playerGuesses = [];