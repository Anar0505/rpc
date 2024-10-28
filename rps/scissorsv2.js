let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let resetbttn = document.getElementById("resetbttn");
let yourpoint = document.getElementById("yourscore");
let computerpoint = document.getElementById("computerscore");
let yourchoice = document.getElementById("yourchoice");
let computerchoice = document.getElementById("computerchoice");
let winner = document.getElementById("winner");

yourpoint.innerHTML = "0";
computerpoint.innerHTML = "0";

function compChoosing() {
  let selects = ["rock", "paper", "scissors"];
  return selects[Math.floor(Math.random() * 3)];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    winner.innerHTML = "It's a tie";
    winner.style.backgroundColor = "blue";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    winner.innerHTML = "You win!";
    winner.style.backgroundColor = "green";
    yourpoint.innerHTML = parseInt(yourpoint.innerHTML) + 1;
  } else {
    winner.innerHTML = "You lose!";
    winner.style.backgroundColor = "red";
    computerpoint.innerHTML = parseInt(computerpoint.innerHTML) + 1; 
  }
}

function playGame(userChoice) {
  yourchoice.innerHTML = userChoice;
  let computerChoice = compChoosing();
  computerchoice.innerHTML = computerChoice;
  determineWinner(userChoice, computerChoice);
}

function resetGame() {
  yourpoint.innerHTML = "0";
  computerpoint.innerHTML = "0";
  yourchoice.innerHTML = "";
  computerchoice.innerHTML = "";
  winner.innerHTML = "";
  winner.style.backgroundColor = ""; 
}

rock.addEventListener("click", () => playGame("rock"));
paper.addEventListener("click", () => playGame("paper"));
scissors.addEventListener("click", () => playGame("scissors"));
resetbttn.addEventListener("click", resetGame);
