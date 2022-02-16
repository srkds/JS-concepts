/* 
Thisn function takes array and item
item is added into queue (at end of the array)
and one item is removed from beginning and returning that value
*/

function nextInLine(arr, item) {
  arr.push(item);
  item = arr.shift();

  return item;
}

// setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// test cases
// nextInLine([],5) // returns a value 5
// nextInLine([2],1) // returns a value 2
