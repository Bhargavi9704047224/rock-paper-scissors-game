const choices = ["rock", "paper", "scissors"];
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultText = document.getElementById("result-text");
const buttons = document.querySelectorAll(".choice");
const resetBtn = document.getElementById("reset");

let userScore = 0;
let computerScore = 0;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.id;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    playRound(userChoice, computerChoice);
  });
});

resetBtn.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  updateScores();
  resultText.textContent = "Make your move!";
});

function playRound(user, computer) {
  if (user === computer) {
    resultText.textContent = `It's a draw! You both chose ${user}.`;
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "scissors" && computer === "paper") ||
    (user === "paper" && computer === "rock")
  ) {
    userScore++;
    resultText.textContent = `You win! ${user} beats ${computer}.`;
  } else {
    computerScore++;
    resultText.textContent = `You lose! ${computer} beats ${user}.`;
  }
  updateScores();
}

function updateScores() {
  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
}
