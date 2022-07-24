// Allow user to input either Rock, Paper, or Scissors, case insensitive
// *Have the computer select either Rock, Paper, or Scissors
// Compare the user's input to the computer's input
// Output a message with the results of the matchup


const options = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random() * 3)];
    return computerChoice;
}

