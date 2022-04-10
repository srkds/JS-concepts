# JavaScript ✨

### Concat

```bash
const ourStr = "I come first. " + "I come second.";
// I come first. I come second.
```

concat two string using `+`sign
**Concatenating Strings with the Plus Equals Operator**

```bash
let ourStr = "I come first. ";
ourStr += "I come second.";
// I come first. I come second.
```

**Find the Length of a String**

```bash
console.log("Alan Peter".length);
```

```bash
let myStr = "Bob";
myStr[0] = "J"; 🚫 // we cannot directly change character using this technique
myStr = "Job"; ✅
```

**Use Bracket Notation to Find the Nth Character in a String**
start counting at 0, so the first character is actually the zeroth character.

```bash
const firstName = "Ada";
const secondLetterOfFirstName = firstName[1]; // d
const lastLetterOfFirstName = firstName[firstName.length - 1]; // a
```

**Arrays**

```bash
const myArray = ["Nirav",5];
```

multidimentional array

```bash
const myArray = [["Mohan",23],["Raman",34]];
```

access elements using []

```bash
const myArray = [50, 60, 70];

const myData = myArray[0]; // 50
```

modify array data with indexes

```bash
const myArray = [18, 64, 99];

myArray[0] = 45; // [45,64,99]
```

M-d Array

```bash
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

arr[3]; // [[10, 11, 12], 13, 14]
arr[3][0]; // [10, 11, 12]
arr[3][0][1]; // 11
```

Multiple arrays with push().An easy way to append data to the end of an array is via the push() function.`.push()` takes one or more parameters and "pushes" them onto the end of the array.

```bash
const arr1 = [1, 2, 3];
arr1.push(4); // [1,2,3,4]

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]); // ["Stimpson", "J", "cat",["happy", "joy"]]
```

`.pop()` removes the last element from an array and returns that element.

```bash
const threeArr = [4, 5, 6];
const oneDown = threeArr.pop();
console.log(oneDown); //6
console.log(threeArr); // [4,5]
```

`.shift()`it removes the first element instead of the last.

```js
cosnt arr = [1,2,3];
arr.shift(); // 1
```

`.unshift()` works like push() but instead adding value at end it adds at beggining.

```js
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy"); // ["Happy","J","cat"]
```

## Functions

reusable javascript functions

```js
function reusableFunction() {
  console.log("Hi World🚀");
}

reusableFunction();
```

**Passing Values to Functions with Arguments**

```js
function functionWithArgs(num1, num2) {
  // prints sum of two nums
  console.log(num1 + num2);
}

functionWithArgs(1, 2);
```

**Return value from function**

```js
function timesFive(num) {
  return num * 5;
}
timesFive(5); // returns 25
```

**Global scope**

```js
// variable with let, and const keywork are global.

let myGlobal = 10;

function fun1() {
  // and variable without any let, const are automatically global.
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output); //myGlobal: 10 oopsGlobal: 5
}
```

assignment of return value

```js
function sum(m, n) {
  return m + n;
}

const mySum = sum(10, 2); // mySum = 12
```

**if**

```
if(condition is true){
  execute code
}
```

`==`:Equality operator. JS must convert two different datatypes to compare

```js
1 == 1; // true
1 == 2; // false
1 == "1"; // true
"1" == 1; // true
```

`===`:Strict Equality operator. It does not perform typeconversion

```js
1 === 1; // true
1 == "1"; // false
```
