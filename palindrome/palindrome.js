'use strict';
// Problem: Please implement a function which checks whether a number is a palindrome or not. For example, 121 is a palindrome, while 123 is not.

function palindrome(pal){
	//first, make it a string
	var palStr = pal.toString();

	//next determine the string's length.
	var palLength = palStr.length;

	//turn it into an array.
	let palArr = palStr.split('');

	//start logic.
	for(let i = 0; i < palArr.length; i++){
		if(palArr[i] == palArr[(palArr.length -1) - i]){
		console.log(palArr[i] ,'so far so good');
		} else {
		  console.log('nope!');
		  return 'sorry, this is not a palindrome!';
		}
		return palStr + ' is a palindrome!';
	};

};
