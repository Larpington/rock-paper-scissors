function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()  * 3);
    if (randomNumber === 0) {
    return "rock";
} else if (randomNumber === 1) {
    return "paper";
} else if (randomNumber === 2) {
    return "scissors";
}
}
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("What is your selection?");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice()
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock beats Scissors!");
        playerScore++;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! Paper beats Rock!");        
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "rock"){
        console.log("Tie! Play again!");
        playRound();
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats Rock!");       
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose! Scissors beats Paper!");      
        computerScore++; 
    } else if (playerSelection === "paper" && computerSelection === "paper"){
        console.log("Tie! Play again!");
        playRound();
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! Scissors beats Paper!");
        playerScore++; 
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose! Rock beats Scissors!");
        computerScore++; 
    } else if (playerSelection === "scissors" && computerSelection === "scissors"){
        console.log("Tie! Play again!");
        playRound();
    }
}

function game() {    
    if (playerScore >= 3) {
        console.log("You have triumphed against the computer! Congratulations!");
    } else if (computerScore >= 3) {
        console.log("You have been defeated, please try again!");
    } 
}
console.log("Hello world")