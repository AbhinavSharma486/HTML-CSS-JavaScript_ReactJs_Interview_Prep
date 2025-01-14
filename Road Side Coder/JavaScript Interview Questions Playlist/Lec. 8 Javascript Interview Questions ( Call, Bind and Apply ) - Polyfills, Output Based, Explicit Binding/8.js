// ~ Call, Bind and Apply in javascript (Explicit Binding)
// ! Question 1 :- What is Call ?

// var obj = { name: "Abhinav" };

// function sayHello(age) {
//   return "Hello " + this.name + " is " + age;
// }

// console.log(sayHello()); // Hello undefined
// console.log(sayHello.call(obj)); // Hello Abhinav
// console.log(sayHello.call(obj, 21)); // Hello Abhinav is 21

// ----------------------------------------------------------------------------------

// ^ Question 2 :- What is Apply ?

// var obj = { name: "Abhinav" };

// function sayHello(age, profession) {
//   return "Hello " + this.name + " is " + age + " and is an " + profession;
// }

// console.log(sayHello.apply(obj, [21, "Developer"])); // Hello Abhinav is 21 and is an Developer

//--------------------------------------------------------------------------


// & Question 3 :- What is Bind ?

// const obj = { name: "Abhinav" };

// function sayHello(age, profession) {
//   return "Hello " + this.name + " is " + age + " and is an " + profession;
// }

// const bindFunc = sayHello.bind(obj);

// console.log(bindFunc(21, "Developer")); // Hello Abhinav is 21 and is an Developer
// console.log(bindFunc(24, "Student")); // Hello Abhinav is 24 and is an Student

//--------------------------------------------------------------------------

// * Question 4 :- Output based questions

// const person = { name: "Abhinav" };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 21)); // Abhinav is 21
// console.log(sayHi.bind(person, 21)); // returns a function

//--------------------------------------------------------------------------

// ? Question 5 :- Call with function inside object

// const age = 10;

// var person = {
//   name: "Abhinav",
//   age: 20,
//   getAge: function () {
//     return this.age;
//   }
// };

// var person2 = { age: 24 };
// console.log(person.getAge.call(person2)); // 24
// console.log(person.getAge.apply(person2)); // 24
// console.log(person.getAge.bind(person2)()); // 24

//--------------------------------------------------------------------------

// ~ Question 6 :- Output based questions

// var status = "😎";

// setTimeout(() => {
//   const status = "😍";

//   const data = {
//     status: "🥑",
//     getStatus() {
//       return this.status;
//     }
//   };

//   console.log(data.getStatus()); // 🥑
//   console.log(data.getStatus.call(this)); // 😎
// });

//--------------------------------------------------------------------------

// ! Question 7 :- Output based questions

// const animal = [
//   { species: "Lion", name: "king" },
//   { species: "Whale", name: "Queen" }
// ];

// function printAnimal(i) {
//   this.print = function () {
//     console.log("#" + i + " " + this.species + ": " + this.name); // #0 Lion: king #1 Whale: Queen
//   };
//   this.print();
// }

// for (let i = 0; i < animal.length; i++) {
//   printAnimal.call(animal[i], i);
// }

//--------------------------------------------------------------------------

// ^ Question 8 :- Append an array to another array

// const array = ["a", "b"];
// const elements = [0, 1, 2];

// array.push.apply(array, elements);

// console.log(array); // ['a', 'b', 0, 1, 2]

//--------------------------------------------------------------------------

// & Question 9 :- Find min/max number in an array(Using apply to enhance Built-in functions)

// const numbers = [5, 6, 2, 3, 7];

// console.log(Math.max.apply(null, numbers)); // 7
// console.log(Math.min.apply(null, numbers)); // 2

//--------------------------------------------------------------------------

// * Question 10 :- Bound function

// function f() {
//   console.log(this); // print complete window object
// }

// let user = {
//   g: f.bind(null)
// };

// user.g();


//--------------------------------------------------------------------------

// ? Question 11 :- Bind Chaining

// function f() {
//   console.log(this.name); // Abhinav
// }

// f = f.bind({ name: "Abhinav" }).bind({ name: "Sharma" });

// f();

//--------------------------------------------------------------------------

// ~ Question 12 :- Fix the line 22 to make code work properly

// function checkPassword(success, failed) {
//   let password = prompt("Password?", "");
//   if (password == "123456") success();
//   else failed();
// }

// let user = {
//   name: "Abhinav Sharma",

//   loginSuccessful() {
//     console.log(`${this.name} logged in`);
//   },

//   loginFailed() {
//     console.log(`${this.name} failed to log in`);
//   },
// };

// checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user));

//----------------------------------------------------------------------------------

// ! Question 13 :- Partial application for login function

// function checkPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "123456") ok();
//   else fail();
// }

// let user = {
//   name: "Abhinav Sharma",

//   login(result) {
//     console.log(this.name + (result ? " login successfull" : " login failed"));
//   }
// };

// checkPassword(user.login.bind(user, true), user.login.bind(user, false));

//----------------------------------------------------------------------------------

// ^ Question 14 :- Explicit Binding with Arrow Function 

// const age = 10;

// var person = {
//   name: "Abhinav",
//   age: 21,

//   getAgeArrow: () => console.log(this.age),
//   getAge: function () {
//     console.log(this.age);
//   }
// };

// var person2 = { age: 24 };
// person.getAgeArrow.call(person2); // undefined
// person.getAge.call(person2); // 24