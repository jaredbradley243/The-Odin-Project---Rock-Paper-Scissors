var playerCount = 0;
var computerCount = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice) {
        case 0:
          return "rock";
        case 1:
          return "flag";
        case 2:
            return "eagle";
        default:
            "ERROR: Computer Refused To Select Rock, Paper, or Scissors And Has Instead Killed You. :(" 
      }
}

function getPlayerChoice(event){
	let playerSelection = event.currentTarget.id;
	return playerSelection;
}

function resetScore(){
	playerCount = 0;
	computerCount = 0;
}

function updatePlayerWeapon(event){
	let playerSelection = getPlayerChoice(event);
	let playerSelectionImage = document.getElementById(playerSelection).src;
	document.getElementById("player-weapon-image").src = playerSelectionImage;
}

function updatePlayerScore(){
	let computerCountText = document.getElementsByClassName("score-number")[1];
	computerCountText.textContent = computerCount;
}

function updateComputerWeapon(computerSelection){
	let computerSelectionImage = document.getElementById(computerSelection).src;
	document.getElementById("mcpoyle-weapon-image").src = computerSelectionImage;
}

function updateComputerScore(){
	let playerCountText = document.getElementsByClassName("score-number")[0];
	playerCountText.textContent = playerCount;
}

function updateScoreCount(roundWinner){
	if (roundWinner === 0){
		computerCount++
		return computerCount;
	}
	if (roundWinner === 1){
		playerCount++;
		return playerCount;
	}
}

function playRound(playerSelection, computerSelection) {
        if (playerSelection === "rock" && computerSelection === "eagle"){
            // return "Player Wins! Rock Beats Scissors!";
            return 1;
        } 
        if (playerSelection === "eagle" && computerSelection === "flag"){
            // return "Player Wins! Scissors Beats Paper!";
            return 1;
        }
        if (playerSelection === "flag" && computerSelection === "rock"){
            // return "Player Wins! Paper Beats Rock!";
            return 1;
        }
        if (computerSelection === "rock" && playerSelection === "eagle"){
            // return "Computer Wins! Rock Beats Scissors!";
            return 0;
        } 
        if (computerSelection === "eagle" && playerSelection === "flag"){
            // return "Computer Wins! Scissors Beats Paper!";
            return 0;
        }
        if (computerSelection === "flag" && playerSelection === "rock"){
            // return "Computer Wins! Paper Beats Rock!";
            return 0;
        }
        if (computerSelection === playerSelection){
            // return `TIE! Player And Computer Both Chose ${computerSelection}`;
            return 2;
        }
    }

function endGame(){
	resetScore();
	disableButtons();
	promptNewGame();
}

function playGame(event){
        let computerSelection = getComputerChoice();
		let playerSelection = getPlayerChoice(event);
		updatePlayerWeapon(event);
		updateComputerWeapon(computerSelection);
        let roundWinner = playRound(playerSelection, computerSelection);
        updateScoreCount(roundWinner);
		updatePlayerScore();
		updateComputerScore();
		if (playerCount == 5 || computerCount == 5){
			endGame()
		} 
}



document.getElementById("rock").addEventListener("click", playGame);

document.getElementById("flag").addEventListener("click", playGame);

document.getElementById("eagle").addEventListener("click", playGame);


function playAudio(){
    const audio = document.getElementById("rockflageagle");
    if(!audio) return;
    audio.play();
  }

  function changeColors(){
    const titleSpan1 = document.getElementById("rock_title");
    const titleSpan2 = document.getElementById("eagle_title");
    titleSpan1.style.color = "red";
    titleSpan2.style.color = "blue";
  }

  function displayTitleCard(){
    const titlecard = document.getElementById("titlecontainer")
    if(!titlecontainer) return;
    titlecard.style.display = "flex";
    hideIntro();
  }
  
  function playTheme(){
      const theme = document.getElementById("theme");
      if(!theme) return;
      theme.play();
    }

  function displayGame(){
    const gamecontainer = document.getElementById("gamecontainer");
    if(!gamecontainer) return;
    gamecontainer.style.display = "block";
    hideIntro();
    hideTitleCard();
}

function hideIntro(){
    const introcontainer = document.getElementById("introcontainer");
    if(!introcontainer) return;
    introcontainer.style.display = "none";
}

function hideTitleCard(){
  const titlecard = document.getElementById("titlecontainer");
  if(!titlecontainer) return;
  titlecard.style.display = "none";
}

const introcontainer = document.getElementById("introcontainer");

start = document.getElementById("start");

start.addEventListener("click", playAudio, {once: true});
start.addEventListener("click", changeColors, {once: true});

const titleSpan2 = document.getElementById("eagle_title");
// titleSpan2.addEventListener("transitionend", displayTitleCard);
// titleSpan2.addEventListener("transitionend", playTheme, {once: true});

const theme = document.getElementById("theme");
theme.addEventListener("ended", displayGame);

if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}