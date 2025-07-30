const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultDiv = document.getElementById("result");
const score = document.getElementById("score");
const resetButton = document.getElementById("reset");

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

// COMPUTER CHOICE
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    console.log("Computer choice is: " + computerChoice);
    return computerChoice;
}

//WINNING CONDITIONS
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        resultDiv.style.color = "black";
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        resultDiv.style.color = "green";
        playerScore++;
        return "You win!";
    } else {
        computerScore++;
        resultDiv.style.color = "red";
        return "You lose!";
    }
    
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;
    score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    resultDiv.textContent = "Game reset. Make your move!";
    resultDiv.style.color = "black";
    resetButton.style.display = "none";
}


function handlePlayerChoice(playerChoice) {
    if (gameOver) return;
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    resultDiv.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
    score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    if (playerScore === 5) {
        resultDiv.textContent = "Congratulations! You reached 5 points first!";
        gameOver = true;
        resetButton.style.display = "block";
    } else if (computerScore === 5) {
        resultDiv.textContent = "Sorry! The computer reached 5 points first!";
        gameOver = true;
        resetButton.style.display = "block";
    }
}


rockButton.addEventListener("click", () => handlePlayerChoice("rock"));
paperButton.addEventListener("click", () => handlePlayerChoice("paper"));
scissorsButton.addEventListener("click", () => handlePlayerChoice("scissors"));
resetButton.addEventListener("click", resetGame);

score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;