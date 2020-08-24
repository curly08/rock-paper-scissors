//play a round function
function playRound() {
    let win = 1;
    let loss = 2;
    let tie = 3;
    let result;

    console.log(this.id, compSelection);

    if (this.id == 'rock' && compSelection == 1) {
        result = 'You tied. You both chose rock.';
        console.log(result);
        return tie;
    } else if (this.id == 'rock' && compSelection == 2) {
        result = 'You lost. Paper covers rock.';
        console.log(result);
        return loss;
    } else if (this.id == 'rock' && compSelection == 3) {
        result = 'You won. Rock crushes scissors.';
        console.log(result);
        return win;
    } else if (this.id == 'paper' && compSelection == 1) {
        result = 'You won. Paper covers rock.';
        console.log(result);
        return win;
    } else if (this.id == 'paper' && compSelection == 2) {
        result = 'You tied. You both chose paper.';
        console.log(result);
        return tie;
    } else if (this.id == 'paper' && compSelection == 3) {
        result = 'You lost. Scissors cut up paper.';
        console.log(result);
        return loss;
    } else if (this.id == 'scissors' && compSelection == 1) {
        result = 'You lost. Rock crushes scissors.';
        console.log(result);
        return loss;
    } else if (this.id == 'scissors' && compSelection == 2) {
        result = 'You won. Scissors cut up paper.';
        console.log(result);
        return win;
    } else if (this.id == 'scissors' && compSelection == 3) {
        result = 'You tied. You both chose scissors.';
        console.log(result);
        return tie;
    } else {
        return 'Round dismissed.';
    }
}

//computer selection - maybe turn numbers into selection variables?
const compSelection = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

//player selection
const userSelection = document.querySelectorAll('.button');
userSelection.forEach((button) => {
    button.addEventListener('click', playRound);
});

function userPlay() {
    let selection = prompt('Are you going into battle with rock, paper, or scissors?', 'Good luck, soldier!');
    
    if (selection === null) {
        return;
    }

    switch (selection.toLowerCase()) {
        case 'rock':
            return 1;
            break;
        case 'paper':
            return 2;
            break;
        case 'scissors':
            return 3;
            break;
        default:
            alert('That\'s not an option, soldier!');
    }
}



let userScore = 0;
let computerScore = 0;

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

