// Get all nodes from the HTML file
const againButton = document.querySelector('.again');
const numberDisplay = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const checkButton = document.querySelectorAll('.btn')[1]; // Second .btn is Check
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

// Generate a random number between 1 and 20
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let scoreValue = 20;
let highscoreValue = 0;

console.log("Secret number:", randomNumber);

// Check button functionality
const checkFunction = () => {
    const guessValue = Number(guessInput.value); // Convert input to number
    if (!guessValue) {
        message.textContent = 'Please enter a number!';
    } else if (guessValue === randomNumber) {
        message.textContent = '🎉 Congratulations! You guessed the number!';
        numberDisplay.textContent = randomNumber;
        document.querySelector('body').style.backgroundColor = 'green';

        if (scoreValue > highscoreValue) {
            highscoreValue = scoreValue;
            highscore.textContent = highscoreValue;
        }
    } else {
        if (scoreValue > 1) {
            scoreValue--;
            score.textContent = scoreValue;
            message.textContent = guessValue < randomNumber ? '📉 Too low! Try again.' : '📈 Too high! Try again.';
        } else {
            message.textContent = '💥 You lost the game!';
            score.textContent = 0;
        }
    }
};

// Reset the game
const againFunction = () => {
    scoreValue = 20;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    score.textContent = scoreValue;
    guessInput.value = '';
    numberDisplay.textContent = '?';
    message.textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    console.log("New secret number:", randomNumber);
};

// Add event listeners
checkButton.addEventListener("click", checkFunction);
againButton.addEventListener("click", againFunction);
