// ^ Link of this youtube video lecture :- https://youtu.be/tslbkSQx9LQ?si=BdZUcvMzL2g1RDcJ

// & JavaScript :-

// TODO : Difference b/w execution method and test method?
// * Ans :- Test method is used to test the code, execution method is used to execute the code.

// TODO : Difference b/w every method & sum method ?
// * Ans :- Every method is used to test the code, sum method is used to execute the code.

// TODO :- tell me about find method ?
// * Ans :- The find method is used to find the element in the array.
// * Ans :- Example :- let arr = [1,2,3,4,5,6,7,8,9,10]; arr.find((value) => value > 5);

// TODO :- tell me about map method ?
// * Ans :- The map method is used to map the element in the array.
// * Ans :- Example :- let arr = [1,2,3,4,5,6,7,8,9,10]; arr.map((value) => value * 2);

// TODO :- tell me about NAN property ?
// * Ans :- The NAN property is used to return the NaN value.
// * Ans :- full form of NAN :- Not a Number.

// TODO :- tell me about weak set & weak map ?
// * Ans :- The weak set is used to store the unique value in the array.
// * Ans :- The weak map is used to store the key value pair in the array.

// TODO :- difference b/w session storage & local storage ?
// * Ans :- Local storage: Data persists even after the browser is closed and reopened.It remains available until explicitly cleared by the user or the website.

// * Ans :-  Session storage: Data is stored for the duration of a single session, meaning it is cleared when the user closes the browser tab or window.

// TODO :- brint the space & Is = is , Giving = giving , Interview = interview
// * Ans :-
// let str = 'VinithIsGivingTheInterview';

// function formatString(input) {
//   return input.replace(/([A-Z])/g, ' $1') // add space before capital letters
//     .trim() // Remove leading space
//     .toLowerCase() // convert all to lowercase
//     .replace(/^vinith/, 'Vinith'); // capitalize only 'Vinith'
// }

// let result = formatString(str);
// console.log(result);

// TODO :- tell me about web worker ?
// * Ans :- The web worker is used to execute the code in the background.

// TODO :- tell me about how can u assign a new array with the size of 10 ?
// * Ans :- let arr = new Array(10);
// let arr = new Array(10);
// console.log(arr.length);

// TODO :- tell me different looping structures in js?
// * Ans :- for loop, while loop, do while loop, for in loop, for of loop

// TODO :- tell me difference b/w view state & session state ?
// * Ans :- The view state is used to store the data in the local storage.

// * Ans :- The session state is used to store the data in the session storage.

// TODO :- what is temporal deadzone ?
// * Ans :- The temporal deadzone is used to store the data in the local storage.
// * Ans :- The Temporal Dead Zone (TDZ) in JavaScript is the period between entering the scope of a variable declared with let or const and the line where it is actually declared. During this zone, the variable exists but cannot be accessed, and any attempt to do so will result in a ReferenceError. The TDZ helps prevent unexpected behavior and errors by ensuring that variables are only used after they have been properly initialized.

// TODO :- what is hoisting ?
// * Ans :- Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

// TODO :- can we redeclare the let variable ?
// * Ans :- No, a variable declared with let in JavaScript cannot be redeclared within the same scope

// TODO :- tell me about escape & unescape function in js ?
// * Ans :- The escape function is used to escape the special characters in the string.
// * Ans :- The unescape function is used to unescape the special characters in the string.

// TODO :- tell me javascript wheather it is a statically typed or dynamically typed language ?
// * Ans :- JavaScript is a dynamically typed language. This means that the data type of a variable is determined at runtime based on the value assigned to it, and you don't need to explicitly declare the type when defining a variable.

// * Key points about dynamic typing in JavaScript:

// * No type declaration: You can assign a value of any data type to a variable without specifying its type beforehand.

// * Runtime type checking: The type of a variable is checked only when the code is executed.

// * Flexibility: This can make development faster, but can also lead to potential errors if you accidentally assign a value of the wrong type.

// TODO :- in dynamically types language wheather all type of checks performed while compilation or run time what happens in dynamically type language ?
// * Ans :- run time type checking.

// TODO :- what is typescript ?
// * Ans :- TypeScript is a superset of JavaScript that adds static typing and other features to improve the quality and reliability of code.

// TODO :- difference between javascipt & typescript ?
// * Ans :- JavaScript is a low-level programming language, while TypeScript is a superset of JavaScript that adds static typing and other features to improve the quality and reliability of code.

// TODO :- merge two string alternatively ?
// * Ans :-
// let str1 = 'vinith';
// let str2 = 'pujari';

// let result = str1 + str2;

// console.log(result);

// TODO :- tell me about callback functions ?
// * Ans :- The callback function is used to pass a function as an argument to another function.
// * Example:-

// function greet(name) {
//   console.log('Hi' + ' ' + name);
// }

// greet('Peter'); // Hi Peter

// TODO :- what do u mean by anonymous function ?
// * Ans :- The anonymous function is function without name.

// TODO :- tell me about promise ?
// * Ans :- A Promise in JavaScript is an object representing the eventual completion(or failure) of an asynchronous operation.It's a way to handle asynchronous tasks more cleanly than using callbacks. A promise can be in one of three states:

// * Pending: The initial state, meaning the operation is not yet complete.

// * Fulfilled(Resolved): The operation completed successfully, and a result value is available.

// * Rejected: The operation failed, and an error or reason for failure is available

// TODO :- tell me about other ways to handle promise ?
// * Ans :- async await & .then or .catch method

// TODO :- what is promise chaining ?
// * Ans :- The promise chaining is used to chain multiple promises together.

// TODO :- diff. b/w debouncing & throttling ?
// * Ans :-

// TODO :- difference between slice & splice method ?
// * Ans :-
// slice
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.slice(1, 4); // Returns [2, 3, 4]
// console.log(arr); // Output: [1, 2, 3, 4, 5] (original array unchanged)
// console.log(newArr); // Output: [2, 3, 4]

// splice
// let cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
// cars.splice(2, 0, 'ambassedor', 'BMW', 'Audi');
// console.log("cars :", cars);

// & ReactJs :-

// TODO :- difference between framework & library ?
// * Ans :- Framework is a collection of libraries, while a library is a collection of components or utilities that can be used in a project.

// TODO :- what is react-router ?
// * Ans :- The react-router is used to manage the navigation in the react application.

// TODO :- how can convert object into string ?
// * Ans :-
// let obj = {
//   name: "abhinav"
// };

// let str = JSON.stringify(obj);

// console.log(str);
// console.log(obj);

// TODO :- how can convert string into object ?
// * Ans :-
// let str = 'abhinav';
// let stringifyStr = JSON.stringify(str);

// let obj = JSON.parse(stringifyStr);

// console.log(obj);
// console.log(stringifyStr);

// TODO :- tell me about HOC(Higher Order Components) ?
// * Ans :- The HOC is a function that takes a component as an argument and returns a new component.

// TODO :- what do u mean by event delegation in js ?
// * Ans :- The event delegation is used to handle events on a parent element and pass them down to child elements.

// & HTML :-

// TODO :- difference between em tag & i tag ?
// * Ans :- The em tag is used to emphasize text, while the i tag is used to specify italic text.

// TODO :- difference between bold & strong tag ?
// * Ans :- The bold tag is used to display bold text, while the strong tag is used to display important text.

// TODO :- tell me difference between cell padding & cell spacing ?
// * Ans :- The cell padding is used to add space between the cells, while the cell spacing is used to add space between the cells.

// TODO :- types of list in HTML ?
// * Ans :- Ordered list, Unordered list, Definition list

// TODO :- difference between block level element & inline element ?
// * Ans :- block-level elements start on a new line and take up the full width available, while inline elements display within the same line and only occupy the space needed by their content.

// * Block element :- <div>, <p>, <h1> to <h6>, <ul>, <ol>, <li>, and <table>.
// * inline element :- <span>, <a>, <strong>, <em>, <img>, <input>, and <button>.

// TODO :- difference between html & xhtml ?
// * Ans :- XHTML is an older, stricter version of HTML that follows XML rules. HTML5 is the latest and more flexible version, bringing in new features for better multimedia and web applications. HTML5 is simpler to use, while XHTML demands strict adherence to XML standards.

// TODO :- use of required attribute in html ?
// * Ans :- The required attribute is used to specify that a form field is required for form submission.

// TODO :- what are empty elements ?
// * Ans :- The empty elements are elements that have no content, such as <br>, <hr>, <img>, <input>, <meta>, and <link>.

// TODO :- what is the use of alt attribute ?
// * Ans :- The alt attribute is used to provide alternative text for an image, making it accessible to users with disabilities or when the image fails to load.

// TODO :- difference between header tag & h1 tag ?
// * Ans :- The header tag is used to create a heading, while the h1 tag is used to create the main heading.

// & CSS :-

// TODO :- tell me difference between display none & visibility hidden ?
// * Ans :- The display none is used to hide the element, while the visibility hidden is used to hide the element without affecting the layout of the page.

// TODO :- what is specificity in css ?
// * Ans :- The specificity is used to determine the priority of a selector in CSS.

// TODO :- priority order of css ?
// * Ans :-
// Inline styles
// IDs
// Classes
// Elements

// TODO :- types of css ?
// * Ans :- Inline styles, Internal styles, External styles, and Cascading styles.

// TODO :- priority of css ?
// * Ans :- inline css > internal css > external css

// TODO :- which property do u use for image reflection ?
// * Ans :- -webkit-box-reflect

// TODO :- for shadowing purpose which property do u use ?
// * Ans :- box-shadow

// TODO :- tell me how can u add gradient in css ? 
// * Ans :- background: linear-gradient(to bottom right, #ff0000, #00ff00);