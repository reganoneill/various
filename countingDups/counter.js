'use strict';

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphanumeric characters, including digits, uppercase and lowercase alphabets.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabbcdeB" -> 2 # 'a' and 'b'
// "indivisibility" -> 1 # 'i'
// "Indivisibilities" -> 2 # 'i' and 's'
// "aa11" -> 2 # 'a' and '1'

function duplicateCount(text){
 let arrayText = text.split('');
 let totalDups = 0;
 let dupArray = [];
 let workingArray = arrayText.map( k => {
   if(typeof k == 'string'){
     return k.toUpperCase();
   }
 })
 for(var i = 0; i <= workingArray.length; i++){
   let currChar = workingArray[i];
   for(var x = workingArray.length -1; x > workingArray.indexOf(currChar); x--){
    if(currChar == workingArray[x]){
      if(dupArray.includes(currChar)){
       console.log('already counted');
      }
      else {
        dupArray.push(currChar);
        totalDups += 1;
      }
    }
   }
  }
 console.log(totalDups);
 return totalDups;
};
