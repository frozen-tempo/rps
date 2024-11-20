function setPlayerChoice(choice) {
  return choice;
}

// Randomly choose rock, paper or scissors for the CPU
function setCPUChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function decideBout(playerChoice) {
  // Let result be an integer 0,1 or 2. 0 being tie, 1 being player win and 2 being cpu win
  let result;
  let cpuChoice = setCPUChoice();
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
  handleAnimation(playerChoice, cpuChoice);
  incrementScores(result);
  return result;
}

function incrementScores(result) {
  if (result == 1) {
    playerScore += 1;
    roundCounter += 1;
  } else if (result == 2) {
    cpuScore += 1;
    roundCounter += 1;
  }
  document.getElementById("round-no").textContent = roundCounter;
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("cpu-score").textContent = cpuScore;
}

function handleAnimation(playerChoice, cpuChoice) {
  document.getElementById(`player-${playerChoice}`).classList.add("selected");
  document.getElementById(`cpu-${cpuChoice}`).classList.add("selected");

  setTimeout(function () {
    document
      .getElementById(`player-${playerChoice}`)
      .classList.remove("selected");
    document.getElementById(`cpu-${cpuChoice}`).classList.remove("selected");
  }, 2000);
}

// Initialise the game
let playerScore = 0;
let cpuScore = 0;
let roundCounter = 1;

// End game when one player score reaches 3
// Add 1 to the winners score and repeat steps 2 to 4
// Take users input for their choice of rock, paper or scissors
