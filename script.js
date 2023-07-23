'use strict';
//selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
//a little bit faster
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0.textContent = 0;
score1.textContent = 0;
//add + STRING
dice.classList.add('hidden');

const finalScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//rolling dice process
btnRoll.addEventListener('click', function () {
  //getting random roll
  const diceRoll = Math.trunc(Math.random() * 6) + 1;
  // display of the dice
  dice.classList.remove('hidden');
  dice.src = `dice-${diceRoll}.png`;
  //if 1 - switch to second player
  if (diceRoll !== 1) {
    //add to current score
    currentScore += diceRoll;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    current0.textContent = currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    //switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    //resent current score
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {
  // add score to the active player
  finalScores[activePlayer] += currentScore;
  document.getElementById(`current--${activePlayer}`).textContent =
    finalScores[activePlayer];
  //check if score =>100
  //finish game

  //switch to the 2nd player
});
