const myArray = [
  [10, 20, 30],
  [3, 6, 7],
  [76, 45, 33],
  [[31, 4, 5], 63, 72],
];

console.log(myArray[3]);
console.log(myArray[3][0]);
console.log(myArray[3][0][2]);

const arr1 = [1, 2, 3];
console.log("before: ", arr1);

arr1.push(4);
console.log("after: ", arr1);

const arr2 = ["Stimpson", "J", "cat"];
console.log("before: ", arr2);

arr2.push(["happy", "joy"]);
console.log("after: ", arr2);

// pop
const arr3 = [1, 2, 3];
let poppedvalue = arr3.pop();
console.log(poppedvalue);
console.log(arr3);

const ourArray = ["Stimpson", "J", ["cat"]];
console.log(ourArray);
const removedFromOurArray = ourArray.shift();
console.log(removedFromOurArray);

const shoppingList = [
  ["5star", 5],
  ["Kitkat", 3],
  ["Munch", 7],
  ["chocolate", 1],
  ["chips", 3],
];
console.log(shoppingList);
