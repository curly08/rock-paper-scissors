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

//declare buttons div
const buttonsDiv = document.querySelector('#buttons');

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

//add event listener (click) to buttons that calls playRound()
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, random());
    });
});

//declare userScore and compScore variables
let userScore = 0;
let compScore = 0;

//play a round function
function playRound(userSelection, compSelection) {
    endGame.textContent = '';

    if (userSelection == 'rock' && compSelection == 'rock') {
        roundDecision.textContent = 'You tied. You both chose rock.';
        score.textContent = `Your score: ${userScore} Computer score: ${compScore}`;
    } else if (userSelection == 'rock' && compSelection == 'paper') {
        roundDecision.textContent = 'You lost. Paper covers rock.';
        compScore += 1;
        score.textContent = `Your score: ${userScore} Computer score: ${compScore}`;
    } else if (userSelection == 'rock' && compSelection == 'scissors') {
        roundDecision.textContent = 'You won. Rock crushes scissors.';
        userScore += 1;
        score.textContent = `Your score: ${userScore} Computer score: ${compScore}`;
    } else if (userSelection == 'paper' && compSelection == 'rock') {
        roundDecision.textContent = 'You won. Paper covers rock.';
        userScore += 1;
        score.textContent = `Your score: ${userScore} Computer score: ${compScore}`;
    } else if (userSelection == 'paper' && compSelection == 'paper') {
        roundDecision.textContent = 'You tied. You both chose paper.';
        score.textContent = `Your score: ${userScore} Computer score: ${compScore}`;
    } else if (userSelection == 'paper' && compSelection == 'scissors') {
        roundDecision.textContent = 'You lost. Scissors cut up paper.';
        compScore += 1;
        score.textContent = `Your score: ${userScore} Computer score: ${compScore}`;
    } else if (userSelection == 'scissors' && compSelection == 'rock') {
        roundDecision.textContent = 'You lost. Rock crushes scissors.';
        compScore += 1;
        score.textContent = `Your score: ${userScore} Computer score: ${compScore}`;
    } else if (userSelection == 'scissors' && compSelection == 'paper') {
        roundDecision.textContent = 'You won. Scissors cut up paper.';
        userScore += 1;
        score.textContent = `Your score: ${userScore} Computer score: ${compScore}`;
    } else if (userSelection == 'scissors' && compSelection == 'scissors') {
        roundDecision.textContent = 'You tied. You both chose scissors.';
        score.textContent = `Your score: ${userScore} Computer score: ${compScore}`;
    } else {
        return 'Round dismissed.';
    }

    checkForWinner(userScore, compScore);
}

//check to see if someone gets 5 points and resets the game
function checkForWinner(userScore, compScore) {
    if (userScore == 5) {
        endGame.textContent = 'You were the first to get 5 points! Congratulations!';
        container.removeChild(buttonsDiv);
        container.appendChild(playAgainButton);
    } else if (compScore == 5) {
        endGame.textContent = 'The computer got 5 points first. :(';
        container.removeChild(buttonsDiv);
        container.appendChild(playAgainButton);
    }
}

//play again button
const playAgainButton = document.createElement('button');
playAgainButton.textContent = 'Play Again';
playAgainButton.addEventListener('click', () => {
    location.reload();
});