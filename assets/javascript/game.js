var possibleWords = ["ross", "rachel", "monica", "joey", "phoebe", "chandler"];
var maxAttempts = 10;
var guessedLetters = [];
var currentWord = "";
var correctGuesses = [];
var guessesLeft = 0;
var gameStarted = false;
var gameOver = false;
var wins = 0;

// use when start button is pressed. 
function reset() {
    guessesLeft = maxAttempts;
    gameStarted = false;
    currentWord = Math.floor(Math.random() * (possibleWords.length));
    guessedLetters = [];
    guessingWord = [];

    for (var i=0; i < possibleWords[currentWord].length; i++) {
        guessingWord.textContent("_");
    }
}
 // when start button is clicked, display this content.

window.onload = function() {
document.getElementsByClassName("start-button").onclick = function reset() {displayDash()};
function displayDash() {
    document.getElementById("wins").textContent = wins;
    document.getElementById("current-word").textContent = "";
    for (var i = 0; i < correctGuesses.length; i++) {
        document.getElementById("current-word").textContent += guessingWord[i];
    }
    document.getElementById("guessesleft-text").textContent = guessesLeft;
    document.getElementById("lettersguessed-text").textContent = guessedLetters;
    if(guessesLeft === 0) {
        document.getElementById("game-over").textContent = "Game Over";
        gameOver = true;
    }
}}

// onkeyup log the letter selected (a to z)

document.onkeyup = function(event) {
    if(event.keyCode>= 65 && event.keyCode <= 90) {
        logGuess(event.key.toLowerCase());
    }
}
function logGuess() {
    if (guessesLeft = 10) {
    gameStarted = true;
    }
}
// if the letter selected is in the word, then display that letter in correctGuesses. 
// Else, display in guessedLetters.

//