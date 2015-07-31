'use strict';

var Answer = require('../main/answer-generator.js');

describe('AnswerGenerator', function() {
  describe('#answer()', function() {


    it('number should not repeat',function(){
     var x=0;
     spyOn(Math,'random').and.callFake(function(){
         var arr = [0.1,0.1,0.2,0.3,0.4];
         return arr[x++];
     });

      var answer = new Answer(Math);
      var arr = answer.answer();
      expect(arr).toBe('1234');
    })

    it("number's length should be 4",function(){
      var answer = new Answer(Math);
      expect(answer.answer().length).toBe(4);
    })

    it('number should be random',function(){
      var x=0;
      spyOn(Math,'random').and.callFake(function(){
           var arr = [0.1,0.2,0.3,0.4];
           return arr[x++];
      });

      var answer = new Answer(Math);
      var arr = answer.answer();
      expect(arr).toBe('1234');
    })

  })
})
