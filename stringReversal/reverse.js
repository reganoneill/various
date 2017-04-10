'use strict';

//challenge: reverse a string

//method 1 - for loop:
function firstReverse(str){
	let revArr = [];
	let strArray = str.split('');
	for(let i=strArray.length; i >= 0; i--){
		revArr.push(strArray[i]);
	}
	return revArr.join('');
}


//method 2 - recursion:
function secondReverse(str, builder, count){

	if(!builder && !count) {
		count = str.length -1;
		builder = '';
    }
	let strArray = str.split('');
	builder += strArray.pop();
	let newStr = strArray.join('');
	if(builder.length > count) {
		console.log(builder);
		return builder;
    }
    secondReverse(newStr, builder, count);
};
