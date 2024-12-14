// ~ Lexical Scope :-
// ! What is Lexical Scope

// Example 1 :-

// // global scope
// var username = "Abhinav Sharma";

// function local() {
//   // local scope
//   console.log(username);
// }

// local();

// Example 2 :-

// function subscribe() {
//   var name = "Abhinav Sharma";
//   function displayName() {
//   console.log(name);
//   }
//   displayName();
// }

// subscribe();

// ^ Closure :-
// & What is Closure

// function makeFunc() {
//   var name = "MDN Docs";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// var myFunc = makeFunc();
// myFunc();

// * Closure Scope Chain

// var e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4)); // Output will be 20

// ? Question 1 :- What will it print

// let count = 0;
// (function printCount() {
//   if (count === 0) {
//     let count = 1; // Shadowing
//     console.log(count); // Output will be 1
//   }
//   console.log(count); // Output will be 0

// })();

/// ~ Question 2 :- Write a function for this

// function createBase(num) {
//   return function (innerNum) {
//     console.log(innerNum + num);
//   };
// }


// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

// ! Question 3 :- Time Optimisation with closures

// function find() {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }

//   return function (index) {
//     console.log(a[index]);
//   };
// }

// const closure = find();
// console.time("6");
// closure(6);
// console.timeEnd("6");
// console.time("50");
// closure(50);
// console.timeEnd("50");

// ^ Question 4 :- Block scope and setTimeout

// Example 1 :-

// for (var i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); // What is logged ? ==> 3 3 3
//   }, 1000);
// }

// Example 2 :-

// for (var i = 0; i < 3; i++) {
//   function inner(i) {
//     setTimeout(function log() {
//       console.log(i); // What is logged ? ==> 0 1 2
//     }, 1000);
//   }
//   inner(i);
// }

// & Question 5 :- Create a private counter

// function counter() {
//   var _counter = 0;

//   function add(increment) {
//     _counter += increment;
//   }

//   function retrive() {
//     return "Counter = " + _counter;
//   }

//   return {
//     add,
//     retrive
//   };
// }

// const c = counter();
// c.add(5);
// c.add(10);

// console.log(c.retrive());

// * Question 6 :- What is Module Pattern

// var module = (function () {
//   function privateMethod() {
//     // do something
//     console.log("private");

//   };

//   return {
//     publicMethod: function () {
//       console.log("private");
//     }
//   };
// })();

// module.publicMethod(); // private
// module.privateMethod(); // Gives error : module.privateMethod() is not a function

// ? Question 7 :- Make this run only once

// let view;
// function likeTheVideo() {
//   let called = 0;

//   return function () {
//     if (called > 0) {
//       console.log("Already Subscribed to Roadside Coder");
//     }
//     else {
//       view = "Roadside Coder";
//       console.log("Subsribe to", view);
//       called++;
//     }
//   };
// }

// let isSubscribed = likeTheVideo();
// isSubscribed();
// isSubscribed();
// isSubscribed();
// isSubscribed();

// ~ Question 8 :- Implement Caching / Memoize function (Memoize Polyfill)

// function myMemoize(fn, context) {
//   const res = {};
//   return function (...args) {
//     var argsCache = JSON.stringify(args);
//     if (!res[argsCache]) {
//       res[argsCache] = fn.call(context || this, ...args);
//     }
//     return res[argsCache];
//   };
// }

// const clumsyProduct = (num1, num2) => {
//   for (let i = 1; i <= 100000000; i++) { }

//   return num1 * num2;
// };

// const memoizedClumsyProduct = myMemoize(clumsyProduct);

// console.time("First call");
// console.log(memoizedClumsyProduct(9467, 7649));
// console.timeEnd("First call");

// console.time("Second call");
// console.log(memoizedClumsyProduct(9467, 7649));
// console.timeEnd("Second call");

// ! Question 9 :- Difference between closure and scope 

