let score2 = JSON.parse(localStorage.getItem("score2")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

/*     if (!score2) {
  score2 = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
} */

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You Lose";
    } else if (computerMove === "Scissors") {
      result = "Tie";
    } else if (computerMove === "Paper") {
      result = "You Win";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You Win";
    } else if (computerMove === "Scissors") {
      result = "You Lose";
    } else if (computerMove === "Paper") {
      result = "Tie";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie";
    } else if (computerMove === "Scissors") {
      result = "You Win";
    } else if (computerMove === "Paper") {
      result = "You Lose";
    }
  }

  if (result === "You Win") {
    score2.wins++;
  } else if (result === "You Lose") {
    score2.losses++;
  } else if (result === "Tie") {
    score2.ties++;
  }

  localStorage.setItem("score2", JSON.stringify(score2));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-move").innerHTML = `
  You
  <img src="images/${playerMove}-emoji.png" class="move-icon" />
  <img src="images/${computerMove}-emoji.png" class="move-icon" />
  computer
  `;

  // alert(
  //   `You picked ${playerMove}. Computer picked ${computerMove}. ${result}.
  //    \nWins: ${score2.wins}, Losses: ${score2.losses}, Tie: ${score2.ties}`
  // );
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score2.wins}, Losses: ${score2.losses}, Tie: ${score2.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }

  return computerMove;
}
