//play a round function
function playRound() {
    const compSelection = random();
    //console.log(this.id, compSelection);
    const win = 1;
    const loss = 2;
    const tie = 3;

    let userScore = 0;
    let computerScore = 0;

    if (this.id == 'rock' && compSelection == 'rock') {
        roundDecision.textContent = 'You tied. You both chose rock.';
        score.textContent = `Your score: ${userScore} Computer score: ${computerScore}`;
        return tie;
    } else if (this.id == 'rock' && compSelection == 'paper') {
        roundDecision.textContent = 'You lost. Paper covers rock.';
        computerScore += 1;
        score.textContent = `Your score: ${userScore} Computer score: ${computerScore}`;
        return loss;
    } else if (this.id == 'rock' && compSelection == 'scissors') {
        roundDecision.textContent = 'You won. Rock crushes scissors.';
        userScore += 1;
        score.textContent = `Your score: ${userScore} Computer score: ${computerScore}`;
        return win;
    } else if (this.id == 'paper' && compSelection == 'rock') {
        roundDecision.textContent = 'You won. Paper covers rock.';
        userScore += 1;
        score.textContent = `Your score: ${userScore} Computer score: ${computerScore}`;
        return win;
    } else if (this.id == 'paper' && compSelection == 'paper') {
        roundDecision.textContent = 'You tied. You both chose paper.';
        score.textContent = `Your score: ${userScore} Computer score: ${computerScore}`;
        return tie;
    } else if (this.id == 'paper' && compSelection == 'scissors') {
        roundDecision.textContent = 'You lost. Scissors cut up paper.';
        computerScore += 1;
        score.textContent = `Your score: ${userScore} Computer score: ${computerScore}`;
        return loss;
    } else if (this.id == 'scissors' && compSelection == 'rock') {
        roundDecision.textContent = 'You lost. Rock crushes scissors.';
        computerScore += 1;
        score.textContent = `Your score: ${userScore} Computer score: ${computerScore}`;
        return loss;
    } else if (this.id == 'scissors' && compSelection == 'paper') {
        roundDecision.textContent = 'You won. Scissors cut up paper.';
        userScore += 1;
        score.textContent = `Your score: ${userScore} Computer score: ${computerScore}`;
        return win;
    } else if (this.id == 'scissors' && compSelection == 'scissors') {
        roundDecision.textContent = 'You tied. You both chose scissors.';
        score.textContent = `Your score: ${userScore} Computer score: ${computerScore}`;
        return tie;
    } else {
        return 'Round dismissed.';
    }
}

const container = document.querySelector('#container');

//create div containing round decision
const roundDecision = document.createElement('div');
roundDecision.setAttribute('id', 'round-decision');
container.appendChild(roundDecision);

//create div containing the score
const score = document.createElement('div');
score.setAttribute('id', 'score');
container.appendChild(score);


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


//score isn't keeping a running tally
//do i need looops?




function game() {
    
    let roundDecision = playRound();

    roundDecision;

    switch (roundDecision) {
        case 1:
            userScore = userScore + 1;
            console.log(`Your score: ${userScore}`);
            console.log(`Computer score: ${computerScore}`);
            break;
        case 2:
            computerScore = computerScore + 1;
            console.log(`Your score: ${userScore}`);
            console.log(`Computer score: ${computerScore}`);
            break;
        case 3:
            console.log(`Your score: ${userScore}`);
            console.log(`Computer score: ${computerScore}`);
            break;
        default:
            return 'Default';
    }
}

function fullGame() {
    game();
    game();
    game();
    game();
    game();

    if (userScore > computerScore) {
        return console.log('You won the best of 5! Congratulations!');
    } else if (userScore < computerScore) {
        return console.log('You lost the best of 5. :(');
    } else {
        return console.log('You tied');
    }
}

