let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let yourpoint = document.getElementById("yourscore");
let computerpoint = document.getElementById("computerscore");
let yourchoice = document.getElementById("yourchoice");
let computerchoice = document.getElementById("computerchoice");
let winner = document.getElementById("winner")


let men = 0
let kp = 0



 yourpoint.innerHTML=men
computerpoint.innerHTML=kp















function compChoosing() {
  let selects = ["rock", "paper", "scissors"];
  let comppick = selects[Math.floor(Math.random() * 3)];
  computerchoice.innerHTML = comppick;
  return computerchoice
}
rock.addEventListener("click", function () {
  yourchoice.innerHTML = "rock";
  compChoosing();
  let secim=compChoosing()
    
  switch (secim.innerText) {
    case "rock":
        winner.innerHTML="its a tie"
        winner.style.backgroundColor="blue"
        break;
  case "paper":
  winner.innerHTML="lose"
  winner.style.backgroundColor="red"
  computerpoint++
  break
  case "scissors":
    winner.innerHTML="win"
    winner.style.backgroundColor="green"
    men++
    break
  }
});
paper.addEventListener("click", function () {
  yourchoice.innerHTML = "paper";
  compChoosing();
  let secim=compChoosing()
  switch (secim.innerText) {
    case "paper":
        winner.innerHTML="its a tie"
        winner.style.backgroundColor="blue"
        break;
  case "scissors":
  winner.innerHTML="lose"
  winner.style.backgroundColor="red"
  computerpoint++
  break
  case "rock":
    winner.innerHTML="win"
    winner.style.backgroundColor="green"
    men++
    break
  }
});
scissors.addEventListener("click", function () {
  yourchoice.innerHTML = "scissors";
  compChoosing();
  let secim=compChoosing()
  switch (secim.innerText) {
    case "scissors":
        winner.innerHTML="its a tie"
        winner.style.backgroundColor="blue"
        break;
  case "rock":
  winner.innerHTML="lose"
  winner.style.backgroundColor="red"
  computerpoint++
  break
  case "paper":
    winner.innerHTML="win"
    winner.style.backgroundColor="green"
    men++
    break
  }
});


