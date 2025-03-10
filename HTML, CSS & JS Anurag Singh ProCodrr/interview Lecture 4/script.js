// & Lecture yt link :- https://youtu.be/-RU5znCPuw4?si=1sAaxExGtAlgkt8a

// & HTML :-

// TODO : Full form of HTML
// * Ans :- Hypertext Markup Language

// TODO : why we use html ?
// * Ans :- To create and structure the content of a webpage.

// TODO : semantic tags in html ?
// * Ans :- HTML semantic tags help you improve the accessibility and search engine optimization of your website.
// * Ans :- aside, section, head, header, footer

// TODO : difference between elements and tags ?
// * Ans :- Elements are the building blocks of the HTML document.
// * Ans :- Tags are used to mark up the elements in the HTML document.

// TODO : attribute in html ?
// * Ans :- An attribute is a property of an HTML element.
// * Ans :- Attributes provide additional information about elements.

// TODO : global attributes ?
// * Ans :- Global attributes are attributes that are applied to all HTML elements.
// * Ans :- id, class, style, title

// TODO : difference between div & span ?
// * Ans :- div is a block-level element, while span is an inline element.
// * Ans :- div is used to create a block-level container, while span is used to create an inline container.

// -----------------------------------------------------------------------------

// & CSS :-

// TODO : specificity in css ?
// * Ans :- The specificity of a selector is a measure of how specific a selector is.
// * Ans :- The specificity of a selector is determined by the number of element types, classes, and IDs in the selector.


// TODO : what is cascade in css ?
// * Ans :- The term “cascading” highlights how CSS applies a hierarchy of rules
// * Ans :- The cascade refers to the way that CSS rules are applied to an HTML document.
// * Ans :- The cascade is a process that allows CSS rules to be applied in a specific order to an HTML document.

// TODO : box model in css ?
// * Ans :- The box model is a concept in CSS that defines the dimensions and layout of elements on a webpage.
// * Ans :- The box model is a model that contains content, padding, border, and margin.

// TODO : default value of box sizing ?
// * Ans :- The default value of box-sizing is content-box.

// TODO : position value ke default value ?
// * Ans :- The default value of position is static.

// TODO : difference between position absolute & relative ?
// * Ans :- position absolute is used to position an element relative to the normal flow of the document.
// * Ans :- position relative is used to position an element relative to its normal position.

// ------------------------------------------------------------------------------------------

// & JavaScript :-

// TODO : why we use javascript ?
// * Ans :- Javascript is used to add interactivity and functionality to web pages.
// * Ans :- Javascript is used to make web pages interactive and dynamic.

// TODO : types of datatypes in js ?
// * Ans :- Primitive datatypes: number, string, boolean, null, undefined, symbol
// * Ans :- Non-primitive datatypes: object, function, array

// TODO : javascript is single threaded or multithreaded ?
// * Ans :- Javascript is a single-threaded language, which means that it can only execute one task at a time.

// TODO : variables in javascript ?
// * Ans :- Variables are containers for storing data values.
// * Ans :- Variables are used to store and manage data in a program.
// * Ans :- let , var , const

// TODO : difference between let & var ?
// * Ans :- let is block scoped, while var is function scoped.
// * Ans :- let is used to declare a block-scoped variable, while var is used to declare a function-scoped variable.

// TODO : function in javascript ?
// * Ans :- A function is a block of code that performs a specific task.
// * Ans :- A function is a reusable piece of code that can be called multiple times in a program.

// TODO : closure in javascript ?
// * Ans :- A closure is a function that has access to the outer scope of another function.

// TODO : DOM in javascript ?
// * Ans :- The Document Object Model (DOM) is a programming interface for HTML and XML documents.
// * Ans :- The DOM represents the structure of an HTML document as an object model.

// TODO : Browser object model in javascript ?
// * Ans :- The Browser Object Model (BOM) is a programming interface for web browsers.
// * Ans :- The BOM represents the structure of a web page as an object model.

// TODO : Output based question answers
// {
//   let a = 1;
//   let b = 2;

//   console.log(a); // 1
//   console.log(b); // 2
// }
// console.log(a); //  a is not defined;
// console.log(b);

// TODO : Output based question answers
// console.log(a); // undefined
// var a = 5;

// TODO : temporal deadzone ?

// TODO : Output based question answers
// const arr = [1, 2, 3];
// arr[4] = 5;

// console.log(arr.length); // 5
// console.log(arr[0]); // 1
// console.log(arr[1]); // 2
// console.log(arr[2]); // 3
// console.log(arr[3]); // undefined
// console.log(arr[4]); // 5
// console.log(arr[30]); // undefined
// console.log(arr.indexOf(3)); // 2

// TODO : Output based question answers

// var x = 20;

// function foo() {
//   console.log(x); // undefined
//   var x = 10;
// }

// foo();

// TODO : Output based question answers

// console.log('Start');
// setTimeout(() => {
//   console.log("TimeOUt");
// }, 0);
// console.log('End');

// output
// start
// end
// timeout

// TODO : Output based question answers

// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// if we use let then output will be
// 1
// 2
// 3

// if we use var then output will be
// 4

// TODO : Output based question answers

// const user1 = {
//   name: 'Jhon',
//   age: 25,
//   address: {
//     city: "Mumbai",
//     state: "Maharashtra"
//   }
// };

// const user2 = Object.assign({}, user1); // ❌ it gives error
// const user2 = { ...user1 }; // ❌ it gives error
// const user2 = JSON.parse(JSON.stringify(user1)); // ✅ it is right

// user2.name = 'Ramesh';
// user2.age = 30;
// user2.address.city = "Pune";

// console.log(user1);
// console.log(user2);

// TODO : there is a screen show numbers & 2 buttons have increment & decrement to the number build it 

document.getElementById("inc").addEventListener("click", () => {
  document.getElementById("scr").innerHTML = Number(document.getElementById("scr").innerHTML) + 1;
});

document.getElementById("dec").addEventListener("click", () => {
  document.getElementById("scr").innerHTML = Number(document.getElementById("scr").innerHTML) - 1;
});