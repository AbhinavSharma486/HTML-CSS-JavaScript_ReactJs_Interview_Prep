// ~ Functions in JavaScript :-

// ! Question 1 :- What is Function Declarations
// function add(num) {
//   return num * num;
// }

// ^ Question 2 :- What is Function Expression
// const square = function (num) {
//   return num * num;
// };

// console.log(square(5));

// & Question 3 :- What is Anonymous function
// function (num) { }

// * Question 4 :- What are First class Functions
// function square(num) {
//   return num * num;
// }

// function displaySquare(fn) {
//   console.log("Square is " + fn(5));
// }

// displaySquare(square);

// ? Question 5 :- What is IIFE (Immediately Invoked Function Expression)

// (function (num) {
//   console.log(num * num);
// })(5);

// ~ Question 6 :- IIFE :  Output bases question
// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(2);
// })(1); // 1

// ! Function Scope :-

// // The following variables are defined in the global scope
// const num1 = 20;
// const num2 = 3;
// const name = "Chammakh Chhallo";

// // This function is defined in the global scope
// function multiply() {
//   return num1 * num2;
// }

// console.log(multiply()); // 60

// // A nested function example
// function getScore() {
//   const num1 = 2;
//   const num2 = 3;

//   function add() {
//     return `${name} scored ${num1 + num2}`;
//   }

//   return add();
// }

// console.log(getScore()); // "Chammakh Chhallo scored 5"

// ^ Question 7 :- Function Scope : Output bases question

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i); // 0 1 2 3 4
//   }, i * 1000);
// }

// & Hoisting in Function :-

// functionName();

// function functionName() {
//   console.log("Abhinav Sharma");
// }

// functionName();

// function functionName() {

//   console.log(x); // undefined
//   var x = 5;

//   console.log("Abhinav Sharma");
// }



// * Question 8 :- Hoisting in Function : Output based question

// var x = 21;

// var fun = function () {
//   console.log(x); // undefined

//   var x = 20;
// };

// fun()

// ? Question 9 :- Params v/s Arguments

// function square(num) { // Params
//   console.log(num * num);
// }

// square(5); // Arguments

// ~ Question 10 :- Spread v/s Rest Operator

// function multiply(num1, num2) { // Rest Operator
//   console.log(num1 * num2);
// }

// var arr = [5, 6];

// multiply(...arr); // spread operator

// ! Question 11 :- Spread , Rest Operator : Output based question

// const fn = (a, x, y, ...numbers) => {
//   console.log(x, y, numbers);
// };

// fn(5, 6, 7, 8, 9, 1, 2, 3, 4);

// ^ Question 12 :- Calback Function :-

// document.addEventListener("click", function () {
//   console.log("Clicked");
// })

// & Question 13 :- Arrow Function :-

// const add1 = (num1, num2) => {
//   return num1 + num2;
// };

// const add2 = (num1, num2) => num1 + num2;

// * Question 14 :- Arrow Function v/s Normal Function :-

// 1 - Syntex
// function square(num) {
//   return num * num;
// }

// const square = (num) => {
//   return num * num;
// };

// 2 - Implicit Return Keyword

// const add1 = (num1, num2) => {
//   return num1 + num2;
// };

// const add2 = (num1, num2) => num1 + num2;

// 3 - Arguments

// function fn() {
//   console.log(arguments);
// }

// fn(1, 2, 3, 4, 5);

// const fnArr = () => {
//   console.log(arguments);
// };

// fnArr(1, 2, 3, 4, 5); // Error : arguments is not defined


// 4 - "this" keyword

let user = {
  username: "Abhinav Sharma",
  ab1: () => {
    console.log("Subscribe to " + this.username); // undefined
  },
  ab2() {
    console.log("Subscribe to " + this.username); // Subscribe to Abhinav Sharma
  }
};

user.ab1();
user.ab2();