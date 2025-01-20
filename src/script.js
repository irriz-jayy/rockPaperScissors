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

console.log(getComputerChoice());

function getHumanChoice() {
  let choice = prompt("What's your choice?").toLowerCase();

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    alert("Invalid choice! Please enter 'rock', 'paper', or'scissors'.");
    return getHumanChoice();
  }
}

console.log(getHumanChoice());
