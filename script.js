document.addEventListener("DOMContentLoaded", () => {
    const humanChoices = document.querySelector('.buttons_variables');
    const humanScoreElement = document.querySelector('.human');
    const computerScoreElement = document.querySelector('.computer');
    const replayButton = document.querySelector('.replay_button');
    const statusElement = document.querySelector('.status');

    let computerScore = 0;
    let humanScore = 0;
    let gameFinished = false;

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

    function getHumanChoice(option) {
        let choice = option;
        if (choice === null) {
            return null;
        }
        if (choice === 'rock'
            || choice === 'scissors'
            || choice === 'paper') {
            return choice;
        }
    }

    function playRound(humanChoice, computerChoice) {
        if ((humanChoice === 'rock' && computerChoice == 'scissors') ||
            (humanChoice === 'paper' && computerChoice == 'rock') ||
            (humanChoice === 'scissors' && computerChoice == 'paper')) {
            statusElement.textContent = '';
            humanScore += 1;
            humanScoreElement.textContent = `Human: ${humanScore}`;
            return humanScore;
        }
        else if (computerChoice === humanChoice) {
            statusElement.textContent = 'Tie round';
            return null;
        }
        else {
            statusElement.textContent = '';
            computerScore += 1;
            computerScoreElement.textContent = `Computer: ${computerScore}`
            return computerScore;
        }
    }

    function examination() {
        if (humanScore === 5) {
            statusElement.textContent = 'You Win';
            gameFinished = true;
        }

        else if (computerScore === 5) {
            statusElement.textContent = 'You lose';
            gameFinished = true;
        }

        return gameFinished;
    }

    function resetScores() {
        humanScore = 0;
        computerScore = 0;
        gameFinished = false;
        humanScoreElement.textContent = '';
        computerScoreElement.textContent = '';
        statusElement.textContent = '';
    }

    humanChoices.addEventListener('click', (event) => {
        if (gameFinished) return;

        let target = event.target;
        let option;

        switch (target.id) {
            case 'button_rock':
                option = 'rock';
                break;
            case 'button_paper':
                option = 'paper';
                break;
            case 'button_scissors':
                option = 'scissors';
                break;
            default:
                return;
        }

        playRound(getHumanChoice(option), getComputerChoice());

        examination();
    })

    replayButton.addEventListener('click', resetScores);
});