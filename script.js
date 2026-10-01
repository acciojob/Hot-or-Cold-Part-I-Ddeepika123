//your code here
let secretNumber = Math.floor(Math.random() * 100) + 1;
let previousGuess = null;
let guessInput = document.getElementById("guess");
let button = document.getElementById("submit");
let response = document.getElementById("response");

button.addEventListener("click", function () {

    let currentGuess = Number(guessInput.value);

    // First guess
    if (previousGuess === null) {

        if (currentGuess < secretNumber) {
            response.innerText = "Guess higher";
        } 
        else if (currentGuess > secretNumber) {
            response.innerText = "Guess lower";
        } 
        else {
            response.innerText = "Correct!";
        }

        previousGuess = currentGuess;
        return;
    }

    // Difference of previous guess
    let previousDifference = Math.abs(previousGuess - secretNumber);

    // Difference of current guess
    let currentDifference = Math.abs(currentGuess - secretNumber);

    // Second or later guesses
    if (currentDifference < previousDifference) {
        response.innerText = "Getting hotter";
    } 
    else {
        response.innerText = "Getting colder";
    }

    // Tell higher/lower
    if (currentGuess < secretNumber) {
        response.innerText += " - Guess higher";
    } 
    else if (currentGuess > secretNumber) {
        response.innerText += " - Guess lower";
    } 
    else {
        response.innerText = "Correct!";
    }

    previousGuess = currentGuess;
});
