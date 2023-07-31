let playerChoice;

let computerChoice;

const options = ["pedra", "papel", "tesoura"];

function getPlayerChoice(){
    return playerChoice = prompt('Escolha entre pedra, papel ou tesoura:');
}

function getComputerChoice(){
    let ramdomSelection = Math.floor(Math.random() * options.length);
    return computerChoice = options[ramdomSelection];
}

function winner (){
    
    getComputerChoice();
    getPlayerChoice();

    console.log(`Computador escolheu ${computerChoice}.`);
    console.log(`Jogador escolheu ${playerChoice}.`);

    if (computerChoice == playerChoice){
         return console.log('Foi empate.')
    }
    else if ((computerChoice == "pedra" && playerChoice == "tesoura") || (computerChoice == "papel" && playerChoice == "pedra") || (computerChoice == "papel" && playerChoice == "pedra")){
        return console.log('Computador venceu.');
    }
    else{
        return console.log('Jogador venceu.')
    }
}

function fullGame(){
    for(let i = 0; i < 5; i++){
        
        winner();
        
    }
}