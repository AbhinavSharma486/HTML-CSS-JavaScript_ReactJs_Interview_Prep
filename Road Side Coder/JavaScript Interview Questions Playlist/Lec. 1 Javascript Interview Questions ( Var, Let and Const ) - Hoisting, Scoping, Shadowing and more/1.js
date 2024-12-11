// ~ Variable Scope :-

// var a = 5;
// console.log(a); // 5

// {
//   var a = 5;
// }

// console.log(a); // 5

// let a = 5;

// console.log(a); // 5

// {
//   let a = 5;
// }

// console.log(a); // undefined

// const a = 5;
// console.log(a); // 5

// {
//   const a = 5;
// }

// console.log(a); // undefined

// ! Variable Shadowing :-

// function text() {
//   let a = "Hello";

//   if (true) {
//     let a = "Hi";
//     console.log(a); // Hi
//   }

//   console.log(a); // Hello
// }

// text();

// ^ Illlegal Shadowing :-

// function text() {
//   var a = "Hello";
//   let b = "Bye";

//   if (true) {
//     let a = "Hi";
//     var b = "Goodbye";
//     console.log(a); // Hi
//     console.log(b); //  Give Error : b is already declared
//   }
// }

// text();

// & Declaration :-

// var a; // not give any type of redeclaration error
// var a; // not give any type of redeclaration error
// var a; // not give any type of redeclaration error

// let b; // Gives error of redeclaration when we declare b using let many times
// let b; // Gives error of redeclaration when we declare b using let many times
// let b; // Gives error of redeclaration when we declare b using let many times
// Same with const ~ let != var

// * Declaration without initialization :-

// var a; // not give amny type of error
// let b; // not give any type of error
// const c; // it give error of initialization

// ? Re-initialization :-

// var a = 10;
// a = 20; // Gives no error

// let b = 10;
// b = 20; // Gives no error

// const c = 10;
// c = 20; // Gives error of re assignment to constant variable (means we can't re initialize the const variable after initiallization)

// ~ JavaScript Execution Context :-

// ! Hoisting & Temporal Dead Zone :-

// var
// console.log(count); // undefined
// var count = 10;

// var count;
// console.log(count); // undefined
// count = 20;

// let
// console.log(count); // Give error : can't access count before intialization
// let count = 20;

// let count;
// console.log(count); // undefined
// count = 20;

// const
// console.log(count); // Give error : can't access count before intialization
// const count = 20;

// const count;
// console.log(count); // Give error : Missing initializer in const declaration
// count = 20;

// TODO : Interview Question :- What will be the console log output

// function abc() {
//   console.log(a); // undefined Temporal Dead Zone it is Defined inside the TDZ but not initialized

//   var a = 10;
// }

// abc();

function abc() {
  console.log(a, b, c); // Give error : can't acces b anc c before initialization 

  const c = 30;
  let b = 20;
  var a = 10;
}

abc();
