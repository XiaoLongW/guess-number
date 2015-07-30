'use strict';

var Answer = require('../main/answer-generator.js');

describe('AnswerGenerator', function() {
  describe('#answer()', function() {
    var answer;
     beforeEach(function(){
       answer = new Answer();
     });

    it('number should not repeat',function(){
      var arr = answer.answer();
      var bo = (arr[0]!=arr[1]&&arr[0]!=arr[2]&&arr[0]!=arr[3]&&arr[0]!=arr[4]&&arr[1]!=arr[2]&&arr[1]!=arr[3]&&arr[2]!=arr[3]);
      expect(bo).toBe(true);
    })

    it('the type of return mast is number and integer',function(){
      var arr = answer.answer();
      var bo = ((typeof((arr[0]-0))=='number')&&(typeof((arr[1]-0))=='number')&&typeof(typeof((arr[2]-0))=='number')&&(typeof((arr[3]-0))=='number'));

      expect(bo).toBe(true);
    })

    it("number's length should be 4",function(){
      var arr = answer.answer();
      var length = arr.length;
      expect(length).toBe(4);
    })

    it('number should be random',function(){
      var bo =(answer.answer() == answer.answer());
      expect(!bo).toBe(true);
    })
  })
})
