// ! 'this' keyword in javascript (Implicit Binding) :-
// ~ Explain 'this' keyword ?

// this.a = 5;
// console.log(a); // 5

// ----------------------------------------------------------------------------------------------

// this.a = 5;
// function getParam() {
//   console.log(this.a); // 5
// }

// getParam();

// ----------------------------------------------------------------------------------------------

// let user = {
//   name: "Abhinav",
//   age: 21,

//   getDetails() {
//     console.log(this.name); // Abhinav
//   }
// };

// user.getDetails();

// ----------------------------------------------------------------------------------------------

// let user = {
//   name: "Abhinav",
//   age: 21,
//   childObj: {
//     newName: "Roadside Coder",

//     getDetails() {
//       console.log(this.newName, "and", this.name); // Roadside Coder and undefined

//     }
//   }
// };

// user.childObj.getDetails();

// ----------------------------------------------------------------------------------------------

// let user = {
//   name: "Abhinav",
//   age: 21,
//   getDetails: () => {
//     console.log(this.name); // undefined
//   }
// };

// user.getDetails();

// ----------------------------------------------------------------------------------------------

// let user = {
//   name: "Abhinav",
//   age: 21,
//   getDetails() {
//     const nestedArrow = () => {
//       console.log(this.name); // Abhinav
//     };
//     nestedArrow();
//   }
// };

// user.getDetails();

// ----------------------------------------------------------------------------------------------

// ^ 'this' in a class

// class user {
//   constructor(n) {
//     this.name = n;
//   }

//   getName() {
//     console.log(this.name);
//   }
// }

// const User = new user("Abhinav");

// console.log(User); // user { name : 'Abhinav}

// ----------------------------------------------------------------------------------------------

// & Question 1 :- What's the output ?

// const user = {
//   firstName: "Abhinav",
//   getName() {
//     const firstName = "Abhinav Sharma";
//     return this.firstName;
//   }
// };

// console.log(user.getName()); // Abhinav

// ----------------------------------------------------------------------------------------------

// * Question 2 :- What's is the result of accessing its ref ? why?

// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }

// let user = makeUser();

// console.log(user.ref.name); // undefined

// ----------------------------------------------------------------------------------------------

// ? Question 3 :- What's the output ?

// const user = {
//   name: "Abhinav",
//   logMessage() {
//     console.log(this.name); // undefined
//   }
// };

// setTimeout(user.logMessage, 1000);

//  corrected to above code

// const user = {
//   name: "Abhinav",
//   logMessage() {
//     console.log(this.name); // Abhinav
//   }
// };

// setTimeout(function () {
//   user.logMessage();
// }, 1000);

// ----------------------------------------------------------------------------------------------

// ~ Question 4 :- What's the output ?

// const user = {
//   name: "Abhinav",
//   greet() {
//     return `Hello, ${this.name}`;
//   },

//   farewell: () => {
//     return `Goodbye, ${this.name}`;
//   }
// };

// console.log(user.greet()); // Hello, Abhinav
// console.log(user.farewell()); // Goodbye, undefined

// ----------------------------------------------------------------------------------------------

// ! Question 5 :- Create an object calculator

// let calculator = {
//   read() {
//     this.a = +prompt("a = ", 0);
//     this.b = +prompt("b = ", 0);
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   multiply() {
//     return this.a * this.b;
//   }
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.multiply());

// ----------------------------------------------------------------------------------------------

// ^ Question 6 :- What's the output ?

// var length = 4;
// function callback() {
//   console.log(this.length); // 4
// }

// const object = {
//   length: 5,
//   method(fn) {
//     fn();
//   }
// };

// object.method(callback);

// ----------------------------------------------------------------------------------------------

// & Question 7 :- Implement calc

// const calc = {
//   total: 0,

//   add(a) {
//     this.total += a;
//     return this;
//   },

//   multiply(a) {
//     this.total *= a;
//     return this;
//   },

//   subtract(a) {
//     this.total -= a;
//     return this;
//   }
// };

// const result = calc.add(10).multiply(5).subtract(30).add(10);
// console.log(result.total); // 30

