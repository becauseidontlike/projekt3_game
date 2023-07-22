'use strict';
//selecting elements
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

let currentScore = 0;

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
    current0.textContent = currentScore;
  } else {
    //switch to next player
  }
});
