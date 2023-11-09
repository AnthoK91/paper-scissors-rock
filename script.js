const choices = ["rock", "paper", "scissors"]

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
let random = Math.floor(Math.random() * choices.length)
computerChoice = choices[random];
console.log(`${computerChoice} is computers selection`)
}

function getPlayerChoice() {
    playerChoice = prompt("Please enter a selection: Rock, Paper, Scissors.").toLowerCase();
    console.log(`${playerChoice} is players selection`)
}

function playRound () {
    getComputerChoice()
    getPlayerChoice()
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
}

do {
    playRound() 
    console.log(`The score is \n
    Computer: ${computerScore} \n
    Player: ${playerScore} \n
    First to 5 wins.`) 
} while (computerScore < 5 && playerScore < 5)

