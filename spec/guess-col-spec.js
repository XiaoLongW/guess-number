'use strict';

var Guess = require('../main/guess.js');
var Answer = require('../main/answer-generator.js');
var CompareNumber = require('../main/compare-number.js');

describe("Guess",function(){

  describe('#guessRandom', function() {

    var answer;
    var compare;
    var guess;
    beforeEach(function(){
      var x=0;
      spyOn(Math,'random').and.callFake(function(){
           var arr = [0.1,0.2,0.3,0.4];
           return arr[x++];
      });
      answer = new Answer(Math)
      compare = new CompareNumber();
      guess = new Guess(answer,compare);
    })

    it('shuld return 0A0B', function() {
      expect(guess.guessRandom('5678')).toBe('0A0B');
    });

    it('shuld return 4A0B', function() {
      expect(guess.guessRandom('1234')).toBe('4A0B');
    });

    it('shuld return 0A4B', function() {
      expect(guess.guessRandom('4321')).toBe('0A4B');
    });
  });
});
