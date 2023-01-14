let playerChoice = ""

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

    let computerChoice = getComputerChoice();
    let result = decideWinner(playerChoice, computerChoice);

    const resultText = document.querySelector(".result")
    resultText.textContent = result
    
    return result;
}


function game(){

    playRound()


    /*
    while (true){
        playRound()
    }
    */

    /*
    for (let i = 0; i < 5; i++) {
        playRound()
    }
    */

}




const rockOption = document.querySelector(".option.rock")
rockOption.addEventListener("click", playerChoiceRock)

function playerChoiceRock(){
    playerChoice = "rock"
    game();
    console.log("test")
}


const paperOption = document.querySelector(".option.paper")
paperOption.addEventListener("click", playerChoicePaper)

function playerChoicePaper(){
    playerChoice = "paper"
    game();
    console.log("test")
}


const scissorsOption = document.querySelector(".option.scissors")
scissorsOption.addEventListener("click", playerChoiceScissors)

function playerChoiceScissors(){
    playerChoice = "scissors"
    game();
    console.log("test")
}



