// Create random number
let randomNumber = Math.floor(Math.random() * 20) + 1

let guessNumber = document.getElementById("guess-number")

let checkBtn = document.getElementById("check-btn")

// display guess number when click
const displayGuess = function() {
    console.log("Guess: ", guessNumber.value)
}
checkBtn.addEventListener("click", displayGuess)