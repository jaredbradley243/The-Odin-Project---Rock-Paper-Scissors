function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice) {
        case 0:
          return "rock";
        case 1:
          return "paper";
        case 2:
            return "scissors";
        default:
            "ERROR: Computer Refused To Select Rock, Paper, or Scissors And Has Instead Killed You. :(" 
      }
};


function playRound(playerSelection, computerSelection) {
        if (playerSelection === "rock" && computerSelection === "scissors"){
            // return "Player Wins! Rock Beats Scissors!";
            return 1;
        } 
        if (playerSelection === "scissors" && computerSelection === "paper"){
            // return "Player Wins! Scissors Beats Paper!";
            return 1;
        }
        if (playerSelection === "paper" && computerSelection === "rock"){
            // return "Player Wins! Paper Beats Rock!";
            return 1;
        }
        if (computerSelection === "rock" && playerSelection === "scissors"){
            // return "Computer Wins! Rock Beats Scissors!";
            return 0;
        } 
        if (computerSelection === "scissors" && playerSelection === "paper"){
            // return "Computer Wins! Scissors Beats Paper!";
            return 0;
        }
        if (computerSelection === "paper" && playerSelection === "rock"){
            // return "Computer Wins! Paper Beats Rock!";
            return 0;
        }
        if (computerSelection === playerSelection){
            // return `TIE! Player And Computer Both Chose ${computerSelection}`;
            return 2;
        }
    };

function game() {
    let player_count = 0;
    let computer_count = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, Paper, or Scissors").toLowerCase()
        let computerSelection = getComputerChoice();
        let round_winner = playRound(playerSelection, computerSelection);
        if (round_winner === 0){
            computer_count++;
        }
        if (round_winner === 1){
            player_count++;
        }
        if (round_winner === 2){
            i--
        }
        alert(`Player Played: ${playerSelection}\nComputer Played: ${computerSelection}\n`)
    }
    if (player_count > computer_count){
        return `Winner is Player With A Score Of ${player_count}`;
    }
    if (player_count < computer_count){
        return `Winner is Computer with A Score of ${computer_count}`;
    }
}


alert(game())