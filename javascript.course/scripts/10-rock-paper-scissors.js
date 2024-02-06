let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

//calling the new score element into JS to be controlled, because we want it to change depending on the result.
//we made the score creation process lower down earlier, so now we copy and paste it into the "innerHTML ="
updateScoreElement(); // this puts the score we used have in a popup, inside this element/paragraph.

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';
  
  if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }

  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins ++;
  } else if (result === 'You lose.') {
    score.losses ++;
  } else if (result === 'Tie.') {
    score.ties ++;
  }

  localStorage.setItem('score', JSON.stringify(score));
  //the score gets updated in localStorage right now, but doesn't update on the page yet in real time by itself

  updateScoreElement(); 

  // document.querySelector('.js-score')
  //   .innerHTML = `Wins: ${score.wins}, Losses ${score.losses}, Ties: ${score.ties}`;

  //because this was a cloned code from higher in the code, it's a good situation to use a function instead of copying. everywhere it says updateScoreElement(), it used to say that whole code above this

  document.querySelector('.js-result').
  innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon"> 
Computer`;
}

function updateScoreElement () {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove () {
  const randomNumber = Math.random();

  let computerMove = ''; /* this "computerMove" is scoped in the function, so it can have the same name as a variable outside of the scope*/

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 3/3) {
    computerMove = 'scissors';
  }

  return computerMove;
}