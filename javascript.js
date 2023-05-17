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
        div2.textContent = "Player Score: " + playerScore + " | " + "Computer Score: " + computerScore;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        div1.textContent = "Results: You lose! Paper beats Rock!"; 
        computerScore++;
        div2.textContent = "Player Score: " + playerScore + " | " + "Computer Score: " + computerScore;
    } else if (playerSelection === "rock" && computerSelection === "rock"){
        div1.textContent = "Results: Tie! Play again!";
        div2.textContent = "Player Score: " + playerScore + " | " + "Computer Score: " + computerScore;
        playRound();
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        div1.textContent = "Results: You win! Paper beats Rock!"; 
        div2.textContent = "Player Score: " + playerScore + " | " + "Computer Score: " + computerScore;      
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        div1.textContent = "Results: You lose! Scissors beats Paper!";      
        computerScore++; 
        div2.textContent = "Player Score: " + playerScore + " | " + "Computer Score: " + computerScore;
    } else if (playerSelection === "paper" && computerSelection === "paper"){
        div1.textContent = "Results: Tie! Play again!";
        div2.textContent = "Player Score: " + playerScore + " | " + "Computer Score: " + computerScore;
        playRound();
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        div1.textContent = "Results: You win! Scissors beats Paper!";
        playerScore++; 
        div2.textContent = "Player Score: " + playerScore + " | " + "Computer Score: " + computerScore;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        div1.textContent = "Results: You lose! Rock beats Scissors!";
        computerScore++; 
        div2.textContent = "Player Score: " + playerScore + " | " + "Computer Score: " + computerScore;
    } else if (playerSelection === "scissors" && computerSelection === "scissors"){
        div1.textContent = "Results: Tie! Play again!";
        div2.textContent = "Player Score: " + playerScore + " | " + "Computer Score: " + computerScore;
        playRound();
    }
}

function game() {    
        if (playerScore >= 3) {
        div3.textContent = "You have triumphed against the computer! Congratulations!";
    } else if (computerScore >= 3) {
        div3.textContent = "You have been defeated, please try again!";
    } 
}

const button1 = document.querySelector(".rock-button");
button1.addEventListener("click", function (e) {
    playRound("rock")
    game();
});

const button2 = document.querySelector(".paper-button");
button2.addEventListener("click", function (e) {
    playRound("paper");
    game();

});

const button3 = document.querySelector(".scissors-button");
button3.addEventListener("click", function (e) {
    playRound("scissors");
    game();

});

const div1 = document.querySelector(".round-results");

const div2 = document.querySelector(".score");
div2.textContent = "Player Score: " + playerScore + " | " + "Computer Score: " + computerScore;

const div3 = document.querySelector(".game-results")

