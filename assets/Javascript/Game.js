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
  }

  if (numGuesses === 0) {
    numGuesses = 9;
    losses++;
    guessChoices = [];
  }
  if (userGuess === computerGuess) {
    wins++;
    numGuesses = 9;
    guessChoices = [];
  }

  //   closing bracket for event listener
};

function updateGuessChoices(guess) {
  //   console.log(guess);
  var selector = document.getElementById("letteroutcome");

  // get array of choices and push to html
}
