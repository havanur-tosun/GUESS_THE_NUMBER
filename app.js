var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random() * 100)+ 1;
var noOfGuesses = 0;
var guessedNums = [];

function play() {
    let userGuess = document.getElementById("guess").value;
    // console.log(userGuess);
    if ( userGuess < 1 || userGuess > 100) {
        alert("Please enter a number between 1 to 100!");
    } else {
        guessedNums.push(userGuess);
        noOfGuesses += 1;

        if(userGuess < answer) {
            msg1.textContent = "Your guess is too low";
            msg2.textContent = "No.of guesses: " + noOfGuesses;
            msg3.textContent = "Guessed Numbers are: " + guessedNums;
        } else if (userGuess > answer){
            msg1.textContent = "Your guess is too high";
            msg2.textContent = "No.of guesses: " + noOfGuesses;
            msg3.textContent = "Guessed Numbers are: " + guessedNums;
        } else if (userGuess == answer) {
            msg1.textContent = "🎉 YUPPII YOU WIN! 🎉";
            msg2.textContent = "The number was: " + answer;
            msg3.textContent = "You guessed it in " + noOfGuesses;
        }
    }
};