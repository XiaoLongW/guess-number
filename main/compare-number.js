'use strict';
var _=require('lodash');

function CompareNumber(){
}

CompareNumber.prototype.game=function(input,answer){
  var aCount=0;
  var bCount=0;

  for(var x = 0; x<input.length; x++){
    var indexA = _.findIndex(answer, function (oneAnswer) {return oneAnswer == input[x];});
    if( indexA == x) {
      aCount++;
    }else if(indexA != -1) {
      bCount++;
    }
  }

  return aCount+'A'+bCount+'B';
};

module.exports = CompareNumber;
