'use strict';

function Guess(answer,compare){
  this.answer = answer;
  this.compare = compare;
}

Guess.prototype.guessRandom = function(input){
  return this.compare.game(input, this.answer.answer());
};

module.exports = Guess;
