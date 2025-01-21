function getComputerChoice() {
  let a = Math.floor(Math.random() * 3) + 1;

  let compChoice;
  if (a === 1) {
    compChoice = "rock";
  } else if (a === 2) {
    compChoice = "paper";
  } else {
    compChoice = "scissors";
  }

  return compChoice;
}
let computerChoice = getComputerChoice();
console.log(computerChoice);

function getHumanChoice() {
  let choice = prompt("What's your choice?").toLowerCase();

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    alert("Invalid choice! Please enter 'rock', 'paper', or'scissors'.");
    return getHumanChoice();
  }
}
let humanChoice = getHumanChoice();
console.log(humanChoice);

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    console.log(`You chose ${humanChoice}`);
    console.log(`Computer chose ${computerChoice}`);

    if (humanChoice === computerChoice) {
      return "It's a tie!";
    }

    if (
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "rock" && computerChoice === "scissors")
    ) {
      humanScore++;
      return "Human wins";
    } else {
      computerScore++;
      return "Computer wins";
    }
  }

  console.log(playRound(humanChoice, computerChoice));
  console.log(humanScore, computerScore);

  for (let i = 1; i < 5; i++) {
    console.log(`This is round: ${i}`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
    console.log(
      `Current Score -> You: ${humanScore}, Computer: ${computerScore}`
    );
    console.log("-----------------------------------");
  }
  // Display the final result
  console.log("Game Over!");
  if (humanScore > computerScore) {
    console.log(
      `You won the game! Final Score -> You: ${humanScore}, Computer: ${computerScore}`
    );
  } else if (computerScore > humanScore) {
    console.log(
      `Computer won the game! Final Score -> You: ${humanScore}, Computer: ${computerScore}`
    );
  } else {
    console.log(
      `It's a tie! Final Score -> You: ${humanScore}, Computer: ${computerScore}`
    );
  }
}

console.log(playGame());
