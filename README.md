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
