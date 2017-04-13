// two different arrays of different lengths (maybe) containing only positive whole numbers, sorted. merge these two arrays into one so that it's still sorted and contains all of the numbers.

let oneArr = [3,4,5,8,12,15,17,55];
let twoArr = [1,33,51,52,53,54,73,76,88];

// method one √
// const arrStats = ( (arr1, arr2) => {
//   let newArr = arr1.concat(arr2);
//   newArr.sort(function(a,b){ return a-b});
//   console.log(newArr);
// });
// arrStats(oneArr, twoArr);

// method two - incomplete
const sortEm = function(first, second, callback){
  let longer = null;
  let smallestInit = null;
  let firstCop = first;
  let secondCop = second;

  let sortedArr = [];
  (first.length > second.length) ? longer = first : longer = second;

  (first[0] < second[0]) ? smallestInit = first : smallestInit = second;

  for(var i = 0; i < longer.length; i++){
    if(first[i] < second[i] ? sortedArr.push(first[i]) :  sortedArr.push(second[i]));
  }

    for(var i = 0; i < longer.length; i++){
    if (first[i] < second[i] ? sortedArr.push(first[i]) :  awesomeSortedArr.push(second[i]));
  }
  console.log(sortedArr);
};

sortEm(oneArr, twoArr);
