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
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  console.log(`You chose ${humanChoice}`);
  console.log(`Computer chose ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log("Its a tie");
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
