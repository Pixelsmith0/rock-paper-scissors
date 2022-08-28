const computerOptions = ['rock', 'paper', 'scissors']; //Array of choices

//Selects a random number between 0 - 1, multiplies it by 3, and cuts off the decimal. The number refers-
//to a random index in the computerOptions array.
function getComputerChoice() { 
    let computerChoice = computerOptions[Math.floor(Math.random() * 3)];
    return computerChoice;
};


let playerChoice; //Creates an empty variable to later store button values

//Assigns a variable to the corresponding button elements. Adds an event to each button that when clicked, will store-
//their labeled value into the playerChoice variable and play a single round using the playRound function.
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
//Compares the computerChoice (randomized) and playerChoice (button click) and stores a particular string into the-
//result variable depending on the outcome of the comparison. Changes result-display div to the result and updates-
//the score-display div
function playRound() {
    let computerChoice = getComputerChoice();
    let result;
    if (playerChoice == 'scissors' && computerChoice == 'rock') {
        result = 'You lose. Rock beats scissors';
        computerScore++;
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        result = 'You win! Scissors beats paper';
        playerScore++;
    } else if (playerChoice == 'scissors' && computerChoice == 'scissors') {
        result = 'You tie! You both chose scissors';
        tieScore++;
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        result = 'You win! Paper beats rock';
        playerScore++;
    } else if (playerChoice == 'paper' && computerChoice == 'paper') {
        result = 'You tie! You both chose paper';
        tieScore++;
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        result = 'You lose! Scissors beats paper'
        computerScore++;
    } else if (playerChoice == 'rock' && computerChoice == 'rock') {
        result = 'You tie! You both chose rock'
        tieScore++;
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
        result = 'You lose! Paper beats rock';
        computerScore++;
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        result = 'You win! Rock beats scissors';
        playerScore++;
    }
    document.querySelector('#result-display').innerText = result;
    document.querySelector('#score-display').innerText = `Player: ${playerScore} || Computer: ${computerScore} || Ties: ${tieScore}`
    return result;
};
