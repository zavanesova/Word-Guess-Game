var guesses = 10;
var words = ["Ross", "Monica", "Rachel", "Joey", "Phoebe", "Chandler"];
var wordChoice = Math.floor(Math.random() * words.length);
var answer = words[wordChoice];
var length = answer.length;
var display = [length];
var output = "";
var displayDash = "";

var directionsText = document.getElementById("#directions-text");
var currentWord = document.getElementById("#current-word");
var wordText = document.getElementById("#word-text");
var lettersGuessed = document.getElementById("#lettersguessed-text");
var guessesLeft = document.getElementById("#guessesleft-text");


document.getElementById("btn").onclick = function() {displayDash()};
function displayDash(){
    for (var i=0; i < answer.length; i++) { 
        display[i] = "_";
        output = output + display[i];
}

document.onkeyup = function(event) {
    var userGuess = event.key;
    for(var j=0; j < answer.length; j++) {
    if(userGuess.toLowerCase() ===letters[j]) {
        display[j]= userGuess.toLowerCase();
    } 
}}}

// currentWord.textContent = answer;
// guessesLeft.textContent = "You have " + guesses + " left!"


//on keyup, if the letter is in the word, then the letter will show up on the wordText, else, the letter will be added to lettersGuessed. 
    // your guessLeft number will go down.
    // this will keep going until you've used up all 10 guesses.

