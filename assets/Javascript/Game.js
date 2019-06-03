var computerChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

document.onkeyup = function(event) {
  var userGuess = event.key;

  var computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  var options = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  if (userGuess != computerGuess) {
    numGuesses--;
    guessChoices.push(userGuess);
    updateGuessChoices(guessChoices);
    remainingGuesses(numGuesses);
  }

  if (numGuesses === 0) {
    numGuesses = 9;
    losses++;
    updateLosses();
    guessChoices = [];
  }
  if (userGuess === computerGuess) {
    wins++;
    updateWins();
    numGuesses = 9;
    guessChoices = [];
  }

  //   closing bracket for event listener
};

function updateGuessChoices(guess) {
  //   console.log(guess);
  var selector = (document.getElementById("letteroutcome").innerHTML = guess);

  // get array of choices and push to html
}

function updateWins() {
  var selector = document.getElementById("wins").innerHTML++;
}

function updateLosses() {
  var selector = document.getElementById("loses").innerHTML++;
}

function remainingGuesses(i) {
  var selector = (document.getElementById("remainingGuesses").innerHTML = i);
}
