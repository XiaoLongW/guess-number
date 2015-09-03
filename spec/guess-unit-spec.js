'use strict';

var Guess = require('../main/guess.js');
var Answer = require('../main/answer-generator.js');
var CompareNumber = require('../main/compare-number.js');

describe("Guess",function(){

  describe('#guessRandom', function() {

    it('guessRandom can run', function() {
      var answer =new Answer(Math);
      spyOn(answer,'answer').and.callFake(function(){
        return '1234';
      });

      var compare = new CompareNumber();
      spyOn(compare,'game').and.callFake(function(){
        return '0A0B';
      });

      var guess = new Guess(answer,compare);
      expect(guess.guessRandom('5678')).toBe('0A0B');
    });
  });
});
