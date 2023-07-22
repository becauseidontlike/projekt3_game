'use strict';
//selecting elements
const score0 = document.querySelector('#score--0');
//a little bit faster
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');

score0.textContent = 0;
score1.textContent = 0;
//add + STRING
dice.classList.add('hidden');
