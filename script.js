function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  

function getComputerChoice(){
    const CHOICES = ["rock", "paper", "scissors"];
    let result = CHOICES[getRandomInt(3)];
    return result;
}  

function decideWinner(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    //draw condition
    if (playerSelection === computerSelection){
        return "draw";
    }
    //winning conditions:
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        return "you win! you chose rock, computer chose scissors"
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        return "you win!, you chose paper, computer chose rock"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "you win! you chose paper, computer chose paper"
    }
    //losing conditions:
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        return "you lose! you chose paper, computer chose scissors"
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        return "you lose! you chose scissors, computer chose rock"
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        return "you lose! you chose rock, computer chose paper"
    }
}

function playRound(){
    let playerChoice = prompt("rock, paper, scissors");
    let computerChoice = getComputerChoice();
    let result = decideWinner(playerChoice, computerChoice);
    alert(result)
    return result;
}


function game(){
    for (let i = 0; i < 5; i++) {
        playRound()
    }
}

game();

