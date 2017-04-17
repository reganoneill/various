'use strict';
//https://www.codewars.com/kata/56484848ba95170a8000004d

// distances traveled (dataset)[0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
//s = seconds between distance checks
const s = 15;
var x = [45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0];

function gps(s, x){
  if(x.length <= 1) return 0;
  x.reduce(function(acc, cur){
    var highestAvg = acc;
    if(cur > highestAvg){
      highestAvg = cur;
    }
    console.log(Math.floor(highestAvg));
    return Math.floor(highestAvg);
  });

};
