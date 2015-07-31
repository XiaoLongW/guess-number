'use strict';
var _=require('lodash')

function AnswerGenerator(math){
  this.math = math;
}

AnswerGenerator.prototype.answer = function(){
  var arrNumber = [];
  var count = 0;

  for(;;){
    var a =this.math.floor(this.math.random()*10);
    if(_.findIndex(arrNumber, function (oneArr) {return oneArr == a;}) == -1){
       arrNumber.push(a);
       count++;
    }
    if(count==4){
      break;
    }
  }

  var strNumber = ''+arrNumber[0]+arrNumber[1]+arrNumber[2]+arrNumber[3];
  return strNumber;
}

module.exports = AnswerGenerator;
