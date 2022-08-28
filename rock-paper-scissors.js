const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function getPlayerSelection() {
    let playerSelection = prompt('Please enter your choice of either Rock, Paper, or Scissors', "")
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

function playRound() {
    let playerChoice = getPlayerSelection();
    let computerChoice = getComputerChoice();
    let result;
    if (playerChoice == 'scissors' && computerChoice == 'rock') {
        result = 'You lose. Rock beats scissors';
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        result = 'You win! Scissors beats paper';
    } else if (playerChoice == 'scissors' && computerChoice == 'scissors') {
        result = 'You tie! You both chose scissors';
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        result = 'You win! Paper beats rock';
    } else if (playerChoice == 'paper' && computerChoice == 'paper') {
        result = 'You tie! You both chose paper';
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        result = 'You lose! Scissors beats paper'
    } else if (playerChoice == 'rock' && computerChoice == 'rock') {
        result = 'You tie! You both chose rock'
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
        result = 'You lose! Paper beats rock';
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        result = 'You win! Rock beats scissors';
    }
    return result;
}

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        console.log("----------")
        let round = playRound();
        console.log(round);
        if (round.includes('win')) {
            ++playerScore;
        } else if (round.includes('lose')) {
            ++computerScore;
        } else if (round.includes('tie')) {
            ++tieScore;
        }
    }
    // let displayScore = 'Player: ' + playerScore + ` || Computer: ` + computerScore + ` || Ties: ` + tie;
    let displayScore = `Player: ${playerScore} || Computer: ${computerScore} || Ties: ${tieScore}`
    console.log('---------')
    console.log('Final Scores are...')
    console.log(displayScore);
    if (playerScore > computerScore) {
        console.log("You beat the computer!");
    } else if (playerScore < computerScore) {
        console.log("You lost to the computer!");
    } else if (playerScore == computerScore) {
        console.log("You tied with the computer!");
    } 
}