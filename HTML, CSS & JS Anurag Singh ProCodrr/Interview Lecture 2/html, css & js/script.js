// * Interview lecture video link : https://youtu.be/MPY-SU1VzRI?si=ZzQn3lCH-Jn9PZa8


// & CSS Interview Questions :-

// TODO : Full form of CSS

// TODO : Box model in CSS

// TODO : Difference b/w box-sizing : border-box && box-sizing : content-box

// TODO : What is the default value of box-sizing

// TODO : Specificity

// TODO : What is the specificity of class , element & id

// TODO : Difference b/w div v/s span

// TODO : What is the display property of an image tag
// * Ans :- Inline

// TODO : Positioning , default value of position property
// * Ans :- static

// TODO : Diff. b/w relative & absolute positioning

// TODO : What is flex box

// TODO : There is a div tag , there are two child of div tag name as span tag , some text is return in span tag & if you give height and width to both span tag , what will happern

// TODO : if u give display flex to div in above scenario what will happen

// -------------------------------------------------------------------

// & JavaScript Interview Questions :-

// TODO : What are different data types in javascript
// * Ans :- bool, string, const, let , null , object , class , function , array , undefined

// TODO : Diff. b/w var & let
// * Ans :- var is global scope variable & let is block scope variable

// TODO : What are promises in Javascript

// TODO : What are different states of promise
// * Ans :- pending, fulfilled, rejected

// TODO : What is DOM
// * Ans :- tree like structure of html document

// TODO : Full form of DOM
// * Ans :- Document object Model

// TODO : What is the use of DOM , why we need to have a DOM
// * Ans :-

// TODO : u want to select some elements on your webpage they have some common class they have card class u have to select the card class using javascript , so which one do u use document.querySelector & document.getElementsByClassName
// * Ans :- document.querySelectorAll

// TODO : Event bubbling & Event capturing

// TODO : What is the default behaviour of event propagation
// * Ans :- Event bubbling

// TODO : What are closures
// * Ans :- lexical environment

// -------------------------------------------------------------------

// & React Interview Questions :-

// TODO : why do we need react
// * Ans :-

// TODO : What is the concept of state in react
// * Ans :-

// TODO : Output Based Questions :-
// {
//   let a = 1;
//   let b = 2;
//   var c = 10;

//   console.log(a); // 1
//   console.log(b); // 2
//   console.log(c); // 10
// }

// console.log(0); // 0
// console.log(c); // 10
// console.log(a); // undefined
// console.log(b); // undefined
// console.log(c); // undefined

// TODO : Strict mode in JS

// TODO : type="module" ?

// TODO : Output Based Questions

// var x = 20;

// function foo() {
//   console.log(x); // undefined
//   var x = 10;
// }

// foo();

// TODO : Output Based Questions

// var x = 20;

// function foo() {
//   console.log(x); // 20
// }

// foo();

// TODO : Output Based Questions

// foo();

// var foo = 20;
// function foo() {
//   console.log('Calling foo'); // Calling foo
// }

// foo(); // foo is not a function

// TODO : Tell me an example using closure

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// const counter = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

// TODO : Output Based Questions

// console.log("Start"); // synchronous code

// setTimeout(() => {
//   console.log("timeout"); // asynchronous code
// }, 0);

// console.log("end"); // synchronous code
// start
// end
// timeout

// TODO : Output Based Questions

// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
// 4
// 4
// 4

// TODO : correct above code without using let

// for (var i = 1; i <= 3; i++) {
//   (function (currentI) {
//     setTimeout(function () {
//       console.log(currentI);
//     }, 1000);
//   })(i);
// }

// TODO :  Output Based Questions

// setTimeout(() => {
//   console.log("timeout"); // asynchronous code
// }, 0);

// Promise.resolve().then(() => console.log("Promise")); // asynchronous code
// console.log("end"); // synchronous code
// end
// Promise
// timeout


// TODO : Output Based Questions

// async function foo() {
//   return "Hello world";
// }

// const result = foo();
// console.log(result);// Promise fullfilled with "Hello world"

// * Ans :- when i not using await with async then it will return an promise


// TODO : come out the value from promise in above code using (.then)

// async function foo() {
//   return "Hello world";
// }

// const result = foo();
// result.then(value => {
//   console.log(value);
// });

// console.log(result);

// TODO : come out the value from promise in above code using (await)

// async function foo() {
//   return "Hello world";
// }

// async function bar() {
//   const value = await foo();
//   console.log(value);
// }

// bar();


// TODO : Output Based Questions
// function abc() {
//   console.log("hi");
// }

// const value = new abc();
// console.log(value);

// hi
// abc{}


// TODO : Destructure the properties

// let details = {
//   user: "Ankit",
//   age: 20,
// };

// const { user, age } = details;

// console.log("user : ", user, "age : ", age);


// TODO : spread above object into a new object

// let details = {
//   user: "Ankit",
//   age: 20,
// };

// const { user, age } = details;

// const newDetails = { ...details };

// console.log("user : ", user, "age : ", age);

// console.log("user : ", newDetails.user, "age : ", newDetails.age);

// TODO : user becomes user-name how will u do this
// & Method 1 :-

// let details = {
//   user: "Ankit",
//   age: 20,
// };

// details["user-name"] = details.user;
// delete details.user;

// console.log("user : ", details["user-name"], "age : ", details.age);

// TODO : user becomes user-name how will u do this
// & Method 2 :-

// let details = {
//   "user-name": "Ankit",
//   age: 20,
// };

// console.log("user : ", details["user-name"], "age : ", details.age);

// TODO : React interview start from here
