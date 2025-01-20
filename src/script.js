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
