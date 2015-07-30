'use strict';

var Guess = require('../main/guess-number.js');

describe('guess-number', function() {
  describe('#game()', function() {
    it('shuld return 0A0B', function() {
      var guess = new Guess();
      expect(guess.game('5678','1234')).toBe('0A0B');
    });

    it('shuld return 4A0B', function() {
      var guess = new Guess();
      expect(guess.game('1234','1234')).toBe('4A0B');
    });

    it('shuld 0A4B', function() {
      var guess = new Guess();
      expect(guess.game('4321','1234')).toBe('0A4B');
    });
  });
});
