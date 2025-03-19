// & This lecture youtube video link :- https://youtu.be/wfsZtTruZQY?si=1vSjtwB3YLn5bC1U

// TODO : what are template literals ?
// * Ans :- Template literals are string literals allowing embedded expressions.

// let value = 2;
// const str = `The value is ${value}`;
// console.log(str); // The value is 2

// TODO :- what are pure & impure functions  ?
// * Ans :- Pure functions are those functions which don't have any side effects.
// * Impure functions are those functions which have side effects.

// TODO :- question based on indexOf() function ?
// const arr = ['A', 'B', 'C', 'D', 'A', 'A'];
// console.log(arr.indexOf('A', 0)); // 0
// console.log(arr.indexOf('A', 1)); // 4
// console.log(arr.indexOf('A', -1)); // 5

// TODO :- return array in assending order ?
// const arr = [2, 100, 3, 150];
// const ass = arr.sort((a, b) => a - b);
// console.log(ass); // [2, 3, 100, 150]

// TODO :- short an array in assending order ?
// const arr = ['A', 'C', 'Q', 'F', 'E'];
// const ass = arr.sort();
// console.log(ass); // ['A', 'C', 'E', 'F', 'Q']

// TODO :- return the length of the array ?
// const arr = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
// console.log(arr.length); // 5

// TODO :- return the length of the array ?
// const arr = [, , ,];
// console.log(arr.length); // 3

// TODO :- return the student using rollNo.  ?
// const arr = [
//   { name: "abhinav", rollNo: 1 },
//   { name: "ajay", rollNo: 20 },
//   { name: "arnav", rollNo: 3 },
// ];

// const filter = arr.filter((item) => item.rollNo === 20);
// console.log(filter);

// TODO :- there are different ways to loop over an array what are the these ways  ?
// * Ans :- There are different ways to loop over an array, one of them is using the for loop , forEach loop , map loop.


// TODO :- what is the difference between forEach loop and map loop ?
// * Ans :- The forEach loop is used to iterate over an array and perform a task on each element. The map loop is used to create a new array by performing a task on each element of the original array.

// TODO :- what is the difference between == and === ?
// console.log([] == []);
// console.log([] === []);


// TODO :- there are few ways to handle asynchronous operations what are these ways   ?
// * Ans :- There are few ways to handle asynchronous operations, one of them is using the setTimeout function , setInterval function , Promise function.


// TODO :- which is better async await v/s promise ?
// * Ans :- The async await is better than the promise because it is easier to read and understand.


// TODO :- BOM(Browser Object Model)  ?
// * Ans :- The BOM is a collection of objects that represent the browser's window, document, location, history, and other properties.


// TODO :- DOM(Document Object Model) ?
// * Ans :- The DOM is a collection of objects that represent the structure and content of a document.


// TODO :- output based question ?
// let abc = 2;
// let a = !--abc;
// let b = !--abc;

// console.log(a, b);

// above code logic :-
// 1. Initialization let abc = 2;
// We declare a variable abc and assign it the value 2.


// 2. First Operation (a = !--abc;):
// let a = !--abc;
// The --abc operation pre-decrements abc, meaning abc is decremented before being used.
// abc was 2, so after --abc, it becomes 1.
// The ! (logical NOT) operator negates the value.
// 1 is a truthy value in JavaScript, and !1 evaluates to false.
// So, a gets assigned false.


// 3. Second Operation (b = !--abc;):
// let b = !--abc;
// Again, --abc is a pre-decrement, so abc is decremented from 1 to 0.
// 0 is a falsy value in JavaScript, and !0 evaluates to true.
// So, b gets assigned true.


// 4. Console Output:
// console.log(a, b);
// false true

// TODO :- output based question ?
// function sum() {
//   console.log("Hello 1");
//   return 2 + 2;
// }
// function square() {
//   console.log("hello 2");
//   return 4 * 4;
// }

// let a = (sum(), square());
// console.log(a);

// Hello 1
// Hello 1
// 16

// TODO :- difference between setTimeout & setInterval ?
// * Ans :- The setTimeout function is used to execute a function after a specified delay, while the setInterval function is used to execute a function at regular intervals.

// TODO :- what is find function in array  ?
// * Ans :- The find() method returns the value of the first element in an array that satisfies a provided testing function.