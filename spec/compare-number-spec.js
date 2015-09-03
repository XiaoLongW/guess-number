'use strict';

var CompareNumber = require('../main/compare-number.js');

describe('guess-number', function() {

  describe('#game()', function() {
    var compareNnumber;
    beforeEach(function(){
      compareNnumber = new CompareNumber();
    });

    it('shuld return 0A0B', function() {
      expect(compareNnumber.game('5678','1234')).toBe('0A0B');
    });

    it('shuld return 4A0B', function() {
      expect(compareNnumber.game('1234','1234')).toBe('4A0B');
    });

    it('shuld return 0A4B', function() {
      expect(compareNnumber.game('4321','1234')).toBe('0A4B');
    });
  });
});
