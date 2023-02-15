'use strict';

const checkBtn = document.querySelector('.check');
const displayHighScore = document.querySelector('.highscore');
const bodyElement = document.querySelector('body');
const numberElement = document.querySelector('.number');
const resetBtn = document.querySelector('.again');

let secrectNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displaySecretNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};

const changeBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const changeDisplayScoreWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

checkBtn.addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
  // no number
  if (!guess) {
    displayMessage('No number!');

    // correct number
  } else if (guess === secrectNumber) {
    displayMessage('Correct Number!');

    displaySecretNumber(secrectNumber);

    changeBackgroundColor('#60b347');
    changeDisplayScoreWidth('30rem');

    if (score > highscore) {
      highscore = score;
      displayHighScore.textContent = highscore;
    }

    // too high
  } else if (guess !== secrectNumber) {
    if (score > 1) {
      displayMessage(guess > secrectNumber ? 'Too High!' : 'Too Low!');

      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game');

      displayScore(0);

      changeBackgroundColor('red');
    }

    // too low
  }
});

resetBtn.addEventListener('click', function () {
  score = 20;
  secrectNumber = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);
  displayMessage('Start guessing...');
  changeBackgroundColor('#222');
  changeDisplayScoreWidth('15rem');
  displaySecretNumber('?');
  document.querySelector('.guess').value = '';
});
