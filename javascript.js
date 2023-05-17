function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
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
    computerSelection = getComputerChoice()
    if (playerSelection === "rock" && computerSelection === "scissors") {
        div1.textContent = "Results: You win! Rock beats Scissors!"
        playerScore++;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        div1.textContent = "Results: You lose! Paper beats Rock!";        
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "rock"){
        div1.textContent = "Results: Tie! Play again!";
        playRound();
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        div1.textContent = "Results: You win! Paper beats Rock!";       
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        div1.textContent = "Results: You lose! Scissors beats Paper!";      
        computerScore++; 
    } else if (playerSelection === "paper" && computerSelection === "paper"){
        div1.textContent = "Results: Tie! Play again!";
        playRound();
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        div1.textContent = "Results: You win! Scissors beats Paper!";
        playerScore++; 
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        div1.textContent = "Results: You lose! Rock beats Scissors!";
        computerScore++; 
    } else if (playerSelection === "scissors" && computerSelection === "scissors"){
        div1.textContent = "Results: Tie! Play again!";
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

const button1 = document.querySelector(".rock-button");
button1.addEventListener("click", function (e) {
    playRound("rock")
});

const button2 = document.querySelector(".paper-button");
button2.addEventListener("click", function (e) {
    playRound("paper");
});

const button3 = document.querySelector(".scissors-button");
button3.addEventListener("click", function (e) {
    playRound("scissors");
});

const div1 = document.querySelector(".results")
div1.textContent = "Results:"