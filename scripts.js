let userScore = 0;
let computerScore = 0;

//computer selection
function random() {
    const num = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    switch (num) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
    }
}

//player selection
const userSelection = document.querySelectorAll('.button');
userSelection.forEach((button) => {
    button.addEventListener('click', playRound);
});

//check to see if someone gets 5 points and resets the game
function checkForWinner() {
    if (userScore == 5) {
        endGame.textContent = 'You were the first to get 5 points! Congratulations!';
        userScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        endGame.textContent = 'The computer got 5 points first. :(';
        userScore = 0;
        computerScore = 0;
    }
}

//play a round function
function playRound() {
    const compSelection = random();
    endGame.textContent = '';

    if (this.id == 'rock' && compSelection == 'rock') {
        roundDecision.textContent = 'You tied. You both chose rock.';
        score.textContent = `Your score: ${userScore} Computer score: ${computerScore}`;
    } else if (this.id == 'rock' && compSelection == 'paper') {
        roundDecision.textContent = 'You lost. Paper covers rock.';
        computerScore += 1;
        score.textContent = `Your score: ${userScore} Computer score: ${computerScore}`;
    } else if (this.id == 'rock' && compSelection == 'scissors') {
        roundDecision.textContent = 'You won. Rock crushes scissors.';
        userScore += 1;
        score.textContent = `Your score: ${userScore} Computer score: ${computerScore}`;
    } else if (this.id == 'paper' && compSelection == 'rock') {
        roundDecision.textContent = 'You won. Paper covers rock.';
        userScore += 1;
        score.textContent = `Your score: ${userScore} Computer score: ${computerScore}`;
    } else if (this.id == 'paper' && compSelection == 'paper') {
        roundDecision.textContent = 'You tied. You both chose paper.';
        score.textContent = `Your score: ${userScore} Computer score: ${computerScore}`;
    } else if (this.id == 'paper' && compSelection == 'scissors') {
        roundDecision.textContent = 'You lost. Scissors cut up paper.';
        computerScore += 1;
        score.textContent = `Your score: ${userScore} Computer score: ${computerScore}`;
    } else if (this.id == 'scissors' && compSelection == 'rock') {
        roundDecision.textContent = 'You lost. Rock crushes scissors.';
        computerScore += 1;
        score.textContent = `Your score: ${userScore} Computer score: ${computerScore}`;
    } else if (this.id == 'scissors' && compSelection == 'paper') {
        roundDecision.textContent = 'You won. Scissors cut up paper.';
        userScore += 1;
        score.textContent = `Your score: ${userScore} Computer score: ${computerScore}`;
    } else if (this.id == 'scissors' && compSelection == 'scissors') {
        roundDecision.textContent = 'You tied. You both chose scissors.';
        score.textContent = `Your score: ${userScore} Computer score: ${computerScore}`;
    } else {
        return 'Round dismissed.';
    }

    checkForWinner();
}

const container = document.querySelector('#container');

//create div containing round decision
const roundDecision = document.createElement('div');
roundDecision.setAttribute('id', 'roundDecision');
container.appendChild(roundDecision);

//create div containing the score
const score = document.createElement('div');
score.setAttribute('id', 'score');
container.appendChild(score);

//create div containing end game result and reset button?
const endGame = document.createElement('div');
endGame.setAttribute('id', 'endGame');
container.appendChild(endGame);