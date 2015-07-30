'use strict';

function Guess(){
}

Guess.prototype.game=function(input,answer){
  var aCount=0;
  var bCount=0;
  for(var x=0;x<input.length;x++){
    if(input[x]==answer[x]){
      aCount++;
    }else{
       for(var y=0;y<answer.length;y++){
         if(input[x]==answer[y]){
          bCount++;
         }
       }
    }
  }
  return aCount+'A'+bCount+'B';
}

module.exports = Guess;
