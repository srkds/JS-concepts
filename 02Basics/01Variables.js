// Variables
// reserves memory and attach this to declared name

var fullName = "Nirav";

/* 
Ways to declare names
    - fullName : Camel Case
    - full-name : Kebab case
    - full_name : snake case
    - FullName
*/

// using
// var, let, and const
// variables are containers to store data

var courseName = "ML bootcamp"; // string

var isApproved = true; // false boolean

var pageVisits = 63; // number

var myName;

console.log(myName); // it is currently Undefined

var myName = "Hello Mr.";
console.log(myName);

var x = 5;
let p = 55;

y = 10; // undeclared
console.log(y); // 10

// var keyword is used in older and all version of JS
// let & const introduced after 2015 versions
// JS variables are case sensitive (y and Y both different variables)

/* let */
let name = "Nirav";
// let name = "Gold"; // this will give error, we cannot redeclare

var yourName = "Mount";

var yourName = "John"; // allowed

{
  let bird = "peocock";
}
// console.log(bird); // we can't use outside scope

// redeclaring

let i = 10; //i is 10
{
  let i = 2; // i is 2
}

// here i is 10
console.log(i);

var e = 10;
{
  var e = 2;
}
// here e is 2
console.log(e);

/* let hoisting */
carName = "Creta";
var carName;
console.log(carName);

houseName = "sweat Home"; // can not access before initialization
let houseName = "Home";

/* const */
const PI = 3.14;
