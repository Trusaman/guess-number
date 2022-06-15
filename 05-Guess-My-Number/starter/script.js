// Create random number
let randomNumber = Math.floor(Math.random() * 20) + 1
console.log("RANDOM NUMBER: ", randomNumber);


let guessNumber = document.getElementById("guess-number")

let checkBtn = document.getElementById("check-btn")

let message = document.getElementById("result-message")
let score = document.getElementById("score")
let highScore = document.getElementById("highscore")
let resetBtn = document.getElementById("reset-btn")

// set initial score & hgh score
let scores = 20

let highScores = 0

// display guess number when click
const displayGuess = function() {
    console.log("Guess: ", guessNumber.value)
    let guess = guessNumber.value
    if (!guess) return
    if (guess == randomNumber) {
        message.innerText = "Correct number!"
        document.body.style.backgroundColor = "green"
        // set new high score
        if (scores > highScores) {
            highScores = scores
            highScore.innerText = highScores
        }
    } else if (guess > randomNumber) {
        message.innerText = "Too high!"
        scores--
        // score is never less than 0
        if (scores < 0) scores = 0
        score.innerText = scores
    } else {
        message.innerText = "Too low!"
        scores--
        // score is never less than 0
        if (scores < 0) scores = 0
        score.innerText = scores
    }
}

const resetGame = function () {
    guessNumber.value = ""
    message.innerText ="Start guessing..."
    document.body.style.backgroundColor = "#222"
    score.value = 20
}

checkBtn.addEventListener("click", displayGuess)
