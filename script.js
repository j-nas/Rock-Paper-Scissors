const scoreP = document.querySelector('#scoreP');
const scoreC = document.querySelector('#scoreC');
let computerScore = 0;
var playerScore = 0;

const btnR = document.querySelector('#btnR');
btnR.addEventListener('click', () =>  {
  let computerRoll = (Math.floor(Math.random()* 3));
  const resultText = document.querySelector('#gameTally');
  const gameOver = document.querySelector('#gameOver');
  if (computerScore === 5 || playerScore === 5) {
    scoreP.textContent = "";
    scoreC.textContent = "";
    gameOver.textContent ="";
    computerScore = 0;
    playerScore = 0;
    return
  }
  if (computerRoll === 0) {
    resultText.textContent = "Computer chooses rock. Tie game.";
  }
  else if (computerRoll === 1) {
    resultText.textContent = "Computer chooses paper. You lose.";
    computerScore = computerScore + 1;
    scoreC.textContent = computerScore;
    if (computerScore === 5) {
      gameOver.textContent = "Game Over. You lose. Press any button to reset.";
    }
  }
  else if (computerRoll === 2) {
    resultText.textContent = "Computer chooses scissors. You win.";
    playerScore = playerScore + 1;
    scoreP.textContent = playerScore;
    if (playerScore === 5) {
      gameOver.textContent = "Game Over. You Win! Press any button to reset.";
    }
  }
});
//paper button
const btnP = document.querySelector('#btnP');
btnP.addEventListener('click', () =>  {
  let computerRoll = (Math.floor(Math.random()* 3));
  const resultText = document.querySelector('#gameTally');
  const gameOver = document.querySelector('#gameOver');
  if (computerScore === 5 || playerScore === 5) {
    scoreP.textContent = "";
    scoreC.textContent = "";
    gameOver.textContent ="";
    computerScore = 0
    playerScore = 0
    return
  }
  if (computerRoll === 0) {
    resultText.textContent = "Computer chooses rock. You Win.";
    playerScore = playerScore + 1;
    scoreP.textContent = playerScore;
    if (playerScore === 5) {
      gameOver.textContent = "Game Over. You win! Press any button to reset."
    }
  }
  else if (computerRoll === 1) {
    resultText.textContent = "Computer chooses paper. Tie game.";
    }
  else if (computerRoll === 2) {
    resultText.textContent = "Computer chooses scissors. You lose.";
    computerScore = computerScore + 1;
    scoreC.textContent = computerScore;
    if (computerScore === 5) {
      gameOver.textContent = "Game Over. You lose. Press any button to reset."
    }
  }
});

//scissor button
const btnS = document.querySelector('#btnS');
btnS.addEventListener('click', () =>  {
  let computerRoll = (Math.floor(Math.random()* 3));
  const resultText = document.querySelector('#gameTally');
  const gameOver = document.querySelector('#gameOver');
  if (computerScore === 5 || playerScore === 5) {
    scoreP.textContent = "";
    scoreC.textContent = "";
    gameOver.textContent ="";
    computerScore = 0
    playerScore = 0
    return
  }
  if (computerRoll === 0) {
    resultText.textContent = "Computer chooses rock. You Lose.";
    computerScore = computerScore + 1;
    scoreC.textContent = computerScore;
    if (computerScore === 5) {
      gameOver.textContent = "Game Over. You lose. Press any button to reset."
    }
  }
  else if (computerRoll === 1) {
    resultText.textContent = "Computer chooses paper. You win.";
    playerScore = playerScore + 1;
    scoreP.textContent = playerScore;
    if (playerScore === 5) {
      gameOver.textContent = "Game Over. You win! Press any button to reset."
    }
  }
  else if (computerRoll === 2) {
    resultText.textContent = "Computer chooses scissors. Tie game.";
    
  }
});


