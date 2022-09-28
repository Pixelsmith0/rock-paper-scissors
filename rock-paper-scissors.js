const computerOptions = ['rock', 'paper', 'scissors'];
function getComputerChoice() { 
    let computerChoice = computerOptions[Math.floor(Math.random() * 3)];
    return computerChoice;
};

let playerChoice;
const rockBtn = document.querySelector('#rock-btn');
rockBtn.addEventListener('click', () => {
    playerChoice = document.querySelector('#rock-btn').innerText.toLowerCase();
    playRound();
});
const paperBtn = document.querySelector('#paper-btn');
paperBtn.addEventListener('click', () => {
    playerChoice = document.querySelector('#paper-btn').innerText.toLowerCase();
    playRound();
});
const scissorsBtn = document.querySelector('#scissors-btn');
scissorsBtn.addEventListener('click', () => {
    playerChoice = document.querySelector('#scissors-btn').innerText.toLowerCase();
    playRound();
});

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
function playRound() {
    let computerChoice = getComputerChoice();
    let result;
    if (playerChoice == 'scissors' && computerChoice == 'rock') {
        result = 'You lose this round. Rock beats scissors.';
        computerScore++;
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        result = 'You win this round! Scissors beats paper.';
        playerScore++;
    } else if (playerChoice == 'scissors' && computerChoice == 'scissors') {
        result = 'You tie this round! You both chose scissors.';
        tieScore++;
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        result = 'You win this round! Paper beats rock.';
        playerScore++;
    } else if (playerChoice == 'paper' && computerChoice == 'paper') {
        result = 'You tie this round! You both chose paper.';
        tieScore++;
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        result = 'You lose this round! Scissors beats paper.'
        computerScore++;
    } else if (playerChoice == 'rock' && computerChoice == 'rock') {
        result = 'You tie this round! You both chose rock.'
        tieScore++;
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
        result = 'You lose this round! Paper beats rock.';
        computerScore++;
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        result = 'You win this round! Rock beats scissors.';
        playerScore++;
    }
    updateResultDisplay(result);
    updateScoreDisplay();
    checkWinner(playerScore, computerScore);
    return result;
};

function updateResultDisplay(result) {
    document.querySelector('#result-display').innerText = result;
};

function updateScoreDisplay() {
    document.querySelector('#score-display').innerText = `Player: ${playerScore} || Computer: ${computerScore} || Ties: ${tieScore}`;
};

const buttons = [rockBtn, paperBtn, scissorsBtn];

function checkWinner(playerScore, computerScore) {
    if (playerScore == 5) {
        document.querySelector('#result-display').innerText = 'You beat the computer!';
        buttons.forEach(button => button.disabled = true);
        resetContainer.appendChild(resetBtn);

    } else if (computerScore == 5) {
        document.querySelector('#result-display').innerText = 'You lose to the computer!';
        buttons.forEach(button => button.disabled = true);
        resetContainer.appendChild(resetBtn);
    }
};

const resetContainer = document.querySelector('#reset-container');
const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset Game';

resetBtn.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;
  updateScoreDisplay();
  buttons.forEach(button => button.disabled = false);
  resetContainer.removeChild(resetBtn);
  document.querySelector('#result-display').innerText = 'First to 5 wins!';
});