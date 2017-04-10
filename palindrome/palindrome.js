'use strict';
// Problem: Please implement a function which checks whether a number is a palindrome or not. For example, 121 is a palindrome, while 123 is not.

function palindrome(pal){
	let palLength = pal.length;
	let palArr = pal.split('');
	for(let i = 0; i < palArr.length; i++){
		if(palArr[i] === palArr[(palArr.length -1) - i]){
		} else {
		  console.log('nope!');
		  return 'sorry, this is not a palindrome!';
		}
	};
  return pal + ' is a palindrome!';
};
