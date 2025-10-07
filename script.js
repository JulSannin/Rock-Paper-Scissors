function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'rock';
    }
    else if (choice === 1) {
        return 'scissors';
    }
    else {
        return 'paper'
    }
}

function getHumanChoice() {
    let choice = window.prompt('Rock, paper or scissors?');
    if (choice === null) {
        return null;
    }
    choice = choice.toLowerCase();
    if (choice === 'rock'
        || choice === 'scissors'
        || choice === 'paper') {
        return choice;
    }
    else {
        alert('Please enter only: rock, paper or scissors');
        return getHumanChoice();
    }
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === null) {
        alert('Game cancelled');
        return 'exit';
    }
    else if ((humanChoice === 'rock' && computerChoice == 'scissors') ||
        (humanChoice === 'paper' && computerChoice == 'rock') ||
        (humanChoice === 'scissors' && computerChoice == 'paper')) {
        humanScore += 1;
        alert(`You win round, ${humanChoice} beat ${computerChoice} \n your score: ${humanScore} \n computer score: ${computerScore}`)
        return humanScore;
    }
    else if ((computerChoice === 'rock' && humanChoice == 'scissors') ||
        (computerChoice === 'paper' && humanChoice == 'rock') ||
        (computerChoice === 'scissors' && humanChoice == 'paper')) {
        computerScore += 1;
        alert(`You lose round, ${computerChoice} beat ${humanChoice} \n your score: ${humanScore} \n computer score: ${computerScore}`)
        return computerScore;
    }
    else {
        alert(`Tie \n your score: ${humanScore} \n computer score: ${computerScore}`)
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
        alert('You lost game');
        return;
    }
}

function resetScores() {
    humanScore = 0;
    computerScore = 0;
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