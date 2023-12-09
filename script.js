const choices = ["rock", "paper", "scissors"]

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * choices.length)
    computerChoice = choices[random];
}

// buttons is a node li`st. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    if (button.id === 'startAgain') {
        startAgain()
    } else {
    playRound(button.id)
    }
  });
});


function playRound (playerChoice) {
    getComputerChoice()
    if (
        (playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")) {
        console.log( `You win! ${playerChoice} beats ${computerChoice}!`)
        playerScore += 1;
    } else if (playerChoice === computerChoice) {
        console.log(`It's a tie. You both chose ${playerChoice}.`)
    } else {
        console.log( `You lose! ${computerChoice} beats ${playerChoice}`)
        computerScore += 1;
    }
    tallyScore(playerScore, computerScore)
}

function tallyScore(playerScore, computerScore) {
    // Array of element IDs to remove
    const idsToRemove = ['score', 'startAgainDiv'];

    // Loop over the array and remove each element if it exists
    idsToRemove.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.remove();
        }
    });

    const addDiv = document.createElement('div');    
    addDiv.setAttribute('id','score');
    document.body.append(addDiv);    
    
    if (computerScore === 5) {
        addDiv.innerText =
        `You lose! Computer wins with a score of ${computerScore}.\n
        Your score was ${playerScore}.\n
        Click 'Start Again?' to restart the game.'`
        const gameButtons = document.querySelectorAll('.game');
        gameButtons.forEach(button => {
            button.remove();
        });
        
    } else if (playerScore === 5) {
        addDiv.innerText =
        `You win with a score of ${playerScore}!\n
        Computers score was ${computerScore}.\n
        Click 'Start Again?' to restart the game.`
        const gameButtons = document.querySelectorAll('.game');
        gameButtons.forEach(button => {
            button.remove();
        });
        
    } else {
        addDiv.innerHTML = `<p>Player score is ${playerScore}<br></br>Computer score is ${computerScore}</p>`
    }


}

function startAgain() {
    // Remove existing game buttons and score divs
    const gameButtons = document.querySelectorAll('.game');
    gameButtons.forEach(button => button.remove());
    const idsToRemove = ['score', 'startAgainDiv'];
    idsToRemove.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.remove();
    });

    // Create new game buttons
    const buttonsDiv = document.createElement('div');
    buttonsDiv.setAttribute('id', 'buttonDiv');
    ['rock', 'paper', 'scissors'].forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.charAt(0).toUpperCase() + choice.slice(1);
        button.setAttribute('id', choice);
        button.setAttribute('class', 'game');
        button.addEventListener('click', () => playRound(choice)); // Attach event listener
        buttonsDiv.appendChild(button);
    });

    // Insert the new buttons before the "Start Again?" button
    const startAgainButton = document.getElementById('startAgain');
    document.body.insertBefore(buttonsDiv, startAgainButton);

    // Reset scores
    playerScore = 0;
    computerScore = 0;

    // Add start again message
    const startAgainDiv = document.createElement('div');
    startAgainDiv.setAttribute('id', 'startAgainDiv');
    startAgainDiv.innerHTML = `<p>You've started again. The player score is ${playerScore}, the computer score is ${computerScore}.<br> Hit any button to begin.</p>`;
    document.body.appendChild(startAgainDiv);
}


function startGame() {
do {
    playRound() 
    console.log(`The score is \n
    Computer: ${computerScore} \n
    Player: ${playerScore} \n
    First to 5 wins.`) 
} while (computerScore < 5 && playerScore < 5)
}