let playerChoice;

let computerChoice;

const options = ["pedra", "papel", "tesoura"];

function getPlayerChoice(){
    return playerChoice = prompt('Escolha entre pedra, papel ou tesoura:');
}

function getComputerChoice(){
    let ramdomSelection = Math.floor(Math.random() * options.length);
    return computerChoice = options.ramdomSelection;
}

function winner (computerChoice, playerChoice){
    if (computerChoice == playerChoice){
        
    }
}