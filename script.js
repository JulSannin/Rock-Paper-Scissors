let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    let point = Math.floor(Math.random() * 3);

    if (point === 0) {
        return 'rock';
    }

    else if (point === 1) {
        return 'paper';
    }

    else {
        return 'scissors';
    }

}

function getHumanChoice() {

    let player_choice = window.prompt('Rock, paper or scissors');

    if (player_choice === null) {
        return null;
    }

    player_choice = player_choice.toLowerCase();

    if (player_choice === 'rock' ||
        player_choice === 'paper' ||
        player_choice === 'scissors') {
        return player_choice;
    }

    else {
        alert('Please enter only: rock, paper or scissors');
        return getHumanChoice();
    }

}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === null) {
        alert('Game cancelled');
        return 'exit';
    }

    let lowerHumanChoice = humanChoice.toLowerCase();
    let lowerComputerChoice = computerChoice.toLowerCase();

    if ((lowerHumanChoice === 'rock' && lowerComputerChoice === 'scissors') ||
        (lowerHumanChoice === 'scissors' && lowerComputerChoice === 'paper') ||
        (lowerHumanChoice === 'paper' && lowerComputerChoice === 'rock')) {
        humanScore += 1;
        alert(`You win round! \n Human score: ${humanScore} \n Computer score: ${computerScore}`);
        return humanScore;
    }

    else if ((lowerComputerChoice === 'rock' && lowerHumanChoice === 'scissors') ||
        (lowerComputerChoice === 'scissors' && lowerHumanChoice === 'paper') ||
        (lowerComputerChoice === 'paper' && lowerHumanChoice === 'rock')) {
        computerScore += 1;
        alert(`You lose round! \n Human score: ${humanScore} \n Computer score: ${computerScore}`);
        return computerScore;
    }

    else {
        alert(`Tie! \n Human score: ${humanScore} \n Computer score: ${computerScore}`)
        return null;
    }

}

function playGame() {

    if (humanScore === 5) {
        alert('You won game');
        return;
    }

    else if (humanScore < 5 && computerScore < 5) {

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        let result = playRound(humanSelection, computerSelection);

        if (result === 'exit') {
            return;
        }

        console.log(humanScore, computerScore);

        playGame();
    }

    else {
        alert('You lost game')
    }
}

function resetScores() {
    humanScore = 0;
    computerScore = 0;
    return humanScore || computerScore;
}

document.addEventListener('DOMContentLoaded', function () {
    let replayButton = document.getElementById('replay_button');

    if (replayButton) {
        replayButton.addEventListener('click', function () {
            resetScores();
            playGame();
        });
    }
});

playGame();