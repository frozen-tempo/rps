function getPlayerChoice() {
  let validChoice = false;
  let playerChoice = "";
  while (!validChoice) {
    playerChoice = prompt("Please enter either Rock, Paper or Scissors: ");
    if (
      playerChoice.toLowerCase() == "rock" ||
      playerChoice.toLowerCase() == "paper" ||
      playerChoice.toLowerCase() == "scissors"
    ) {
      validChoice = true;
    } else {
      console.log("Enter a valid choice");
    }
  }
  return playerChoice.toLowerCase();
}

// Randomly choose rock, paper or scissors for the CPU
function getCPUChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  console.log(randomChoice);
  return choices[randomChoice];
}

function decideBout(playerChoice, cpuChoice) {
  // Let result be an integer 0,1 or 2. 0 being tie, 1 being player win and 2 being cpu win
  let result;
  // Determine the winner of a bout with the following rules: Rock beats scissors, Scissors beats paper, Paper beats rock and same ties.
  if (playerChoice == "rock" && cpuChoice == "scissors") {
    result = 1;
  } else if (playerChoice == "paper" && cpuChoice == "rock") {
    result = 1;
  } else if (playerChoice == "scissors" && cpuChoice == "paper") {
    result = 1;
  } else if (playerChoice == cpuChoice) {
    result = 0;
  } else {
    result = 2;
  }

  return result;
}

// Initialise both players scores to 0
let playerScore = 0;
let cpuScore = 0;
let playerChoice;
let cpuChoice;
// End game when one player score reaches 3
// Add 1 to the winners score and repeat steps 2 to 4
while (playerScore < 3 && cpuScore < 3) {
  // Take users input for their choice of rock, paper or scissors
  playerChoice = getPlayerChoice();
  cpuChoice = getCPUChoice();
  console.log(`The Player has chosen: ${playerChoice}`);
  console.log(`The CPU has chosen: ${cpuChoice}`);
  console.log(`Fight!`);
  if (decideBout(playerChoice, cpuChoice) == 1) {
    playerScore += 1;
    console.log("Player Wins!");
  } else if (decideBout(playerChoice, cpuChoice) == 2) {
    cpuScore += 1;
    console.log("CPU Wins!");
  } else {
    console.log("It's a tie! Play Again!");
  }
  console.log(`Player Score: ${playerScore}`);
  console.log(`Computer Score: ${cpuScore}`);
}

if (playerScore >= cpuScore) {
  console.log("Humans reign supreme or machine!");
} else {
  console.log("Quick! Run! The machines have won!");
}
