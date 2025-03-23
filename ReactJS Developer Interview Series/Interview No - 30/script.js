// & Youtube video link of this lecture :- https://youtu.be/7UO_gP-o_wE?si=BHwghKau4mtw2Ksp

// ^ JavaScript :-

// TODO :- Output based question ?

// function abc() {
//   console.log("abc");
//   return 100 + 100;

// }
// function def() {
//   console.log("def");
//   return 200 - 200;
// }

// let a = (abc(), def());
// console.log(a);

// abc
// def
// 0

// TODO :- what is find function ?
// * Ans :- find function is used to find the element in the array.

// TODO :- tell me all array methods with names ?
// * Ans :- forEach, map, filter, reduce etc.

// TODO :- difference between forEach method & map method ?
// * Ans :- forEach method is used to iterate over the array and map method is used to create a new array.

// TODO :- output based question ?
// let arr = [1, 2, 3, 4];
// let result = arr.find((x) => x === 7);
// console.log(result); // undefined

// TODO :- what are events explain with example ?
// * Ans :- Events are used to add functionality to the HTML elements such as buttons, links, images etc. Events are triggered when the user performs an action on the element.

// TODO :- tell me all mouse events with names ?
// * Ans :- click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, wheel etc.

// TODO :- tell me all form events with names ?
// * Ans :- change, submit, reset etc.

// TODO :- tell me all keyboard events with names ?
// * Ans :- keydown, keyup, keypress etc.

// TODO :- what is BOM(Browser Object Model) ?
// * Ans :- BOM is used to access the browser's built-in objects such as window, document, navigator etc.

// TODO :- what is server side rendering ?
// * Ans :- Server-side rendering is used to render the HTML on the server and send it to the client. It is used to improve the performance of the website.

// TODO :- tell me all ways to handle asynchronous code with names ?
// * Ans :- callback, setTimeout, setInterval, Promise, async/await etc.

// TODO :- can we use await without async function if yes then how if no then why ?
// * Ans :- No, await cannot be used outside an async function in JavaScript because it is designed to work within functions that return a Promise. If used in a normal function or global scope (outside of ES modules), it throws a SyntaxError. However, since ES2022, JavaScript allows await at the top level in modules, meaning you can use it directly in .mjs files or scripts with type="module". If you need to use await in a non-async context, you can handle Promises using .then() or wrap the code inside an immediately invoked async function.

// TODO :- what do u mean my function expression with example ?
// * Ans :- In JavaScript, a function expression is a way to define a function as part of a larger expression, rather than as a standalone declaration. Essentially, you're assigning a function to a variable.

// * syntax for Function Declaration

// function greet(name) {
//   return "Hello, " + name;
// }

// console.log(greet("Abhinav"));

// * syntax for Function Expression

// const greet = function (name) {
//   return "Hello, " + name;
// };

// console.log(greet("Abhinav"));

// TODO :- what is promise chaining ?
// * Ans :- Promise chaining is a technique used in JavaScript to chain multiple asynchronous operations together, where each operation returns a Promise that is used to control the flow of the code.

// TODO :- tell me what promise.all() method does ?
// * Ans :- The Promise.all() method is used to wait for all the promises to resolve before executing the next code.

// TODO :- what is event deligation ?
// * Ans :- Event deligation is a technique used in JavaScript to handle events on a parent element that are triggered by child elements. It is used to reduce the number of event listeners required on a page.

// TODO :- what is block scope ?
// * Ans :- Block scope is a type of scope in JavaScript that is limited to the block in which it is defined. It is used to avoid variable conflicts between different parts of a program.

// TODO :- what is throttling ?
// * Ans :- Throttling in JavaScript is a technique used to limit the rate at which a function can be executed. It ensures that a function is called at most once within a specified time interval, regardless of how frequently the triggering event occurs. This is particularly useful for handling events that fire rapidly and repeatedly, such as scrolling, resizing, or mouse movements, where excessive function calls can lead to performance issues

// TODO :- what is debouncing in js ?
// * Ans :- Debouncing in JavaScript is a technique used to limit the rate at which a function is executed. It ensures that a function is called only once after a specified period of inactivity, preventing it from being triggered too many times in quick succession. This is particularly useful for handling events that occur rapidly, such as typing in an input field, resizing a window, or scrolling

// TODO :- difference between throttling & debouncing ?
// * Ans :- Throttling is used to limit the rate at which a function is executed, while debouncing is used to prevent a function from being called too many times in quick succession.

// TODO :- difference between local storage & session storage ?
// * Ans :- Local storage is used to store data that is specific to the user or application, while session storage is used to store data that is specific to the session or tab.

// TODO :- output based question ?
// let num = 2;
// let a = !--num;
// let b = !--num;
// console.log(a, b); // false, true

// TODO :- what is immediately invoked function expression with example ?
// * Ans :- IIFE (Immediately Invoked Function Expression) is a JavaScript pattern that allows you to create and execute a function immediately, without having to declare a separate function name.

// (function () {
//   console.log("IIFE");
// })();

// TODO :- what is the purpose of IIFE ?
// * Ans :- The purpose of IIFE (Immediately Invoked Function Expression) is to create a self-contained scope for the code inside the function, preventing conflicts with other variables in the global scope.

// TODO :- there are certain way to declare IIFE tell me the ways ?
// * Ans :- There are several ways to declare an IIFE in JavaScript:

// (function () {
//   console.log("IIFE");
// });

// (function () {
//   console.log("IIFE");
// }());

// TODO :- output based question ?
// console.log(+"555"); // 555
// console.log(+"555"); // 555

// TODO :- what is the use of isNan functoin ?
// * Ans :- The isNaN() function is used to check if a value is not a number (NaN). It returns true if the value is not a number, and false if it is a number.

// TODO :- in which scenario we receive NaN ?
// * Ans :- NaN is returned when a value cannot be converted to a number, such as when parsing a string containing non-numeric characters.

// TODO :- ES6 features with example ?
// * Ans :- ES6 features include arrow functions, let and const, template literals, destructuring, class syntax, and more. They provide a more concise and modern way to write JavaScript code. Examples of ES6 features include:

// TODO :- what is template literals with example ?
// * Ans :- Template literals are strings that allow you to embed expressions inside them. They are used to create strings that are more dynamic and easier to read.

// let name = "Abhinav";
// let age = 21;

// console.log(`My name is ${name} and I am ${age} years old.`);

// TODO :- what is event bubbling & event capturing with example ?
// * Ans :- Event bubbling is a concept in JavaScript where an event is propagated from a child element to its parent element, and vice versa. It is used to handle events that occur within nested elements.
// * Ans :- Event capturing is a concept in JavaScript where an event is propagated from the parent element to its child element, and vice versa. It is used to handle events that occur within nested elements.

// TODO :- what is destructuring with example ?
// * Ans :- Destructuring is a feature in JavaScript that allows you to extract values from arrays or objects and assign them to variables. It is used to simplify code and make it more readable.

// destructuring in arrays
// let arr = [1, 2, 3];

// let [a, b, c] = arr;

// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3

// destructuring in objects
// let obj = {
//   name: "Abhinav",
//   age: 21
// };

// let { name, age } = obj;

// console.log(name); // Abhinav
// console.log(age); // 21

// -----------------------------------------------------------------------------

// ^ ReactJS :-

// TODO :- what are the react libraries ?
// * Ans :- ReactJS is a JavaScript library for building user interfaces. It is used to create reusable UI components that can be easily integrated into other applications. The main libraries used in ReactJS are:

// React UI libraries :
// Chakra UI:
// Material UI (MUI):
// React Bootstrap:
// Tailwind CSS UI

// React State Management libraries :
// Redux

// TODO :- what is axios ?
// * Ans :- Axios is a popular JavaScript library for making HTTP requests in browser and node.js. It provides a simple and easy-to-use interface for sending HTTP requests and handling responses.

// TODO :- what the method use in api integration ?
// * Ans :- axios, fetch

// TODO :- what is context api in redux ?
// * Ans :- The Context API in React is used to share data between components in a React application. It allows you to pass data down through the component tree without explicitly passing it as props.

// TODO :- why context api come into place , what the reason , what the purpose ?
// * Ans :- The Context API in React is used to share data between components in a React application. It allows you to pass data down through the component tree without explicitly passing it as props. This is useful when you want to pass data to multiple components at once, without having to pass it through props in each component. It is a way to create a global state in React that can be accessed by any component in the application.

// TODO :- what is prop drilling in react ?
// * Ans :- Prop drilling in React refers to the practice of passing data down through multiple levels of nested components via props, even when intermediate components do not directly use the data. This can lead to verbose and hard-to-maintain code, especially in large applications with deeply nested component trees

// TODO :- what is the difference between useMemo & useCallback ?
// * Ans :- useMemo is used to memoize a function's result, while useCallback is used to memoize a function's result and ensure it is not recreated on every render.

// TODO :- what is life cycle method in react ?
// * Ans :- React lifecycle methods are a series of functions that get called in different phases of a component's existence. These methods allow developers to control the component's behavior and perform actions at specific stages, such as when the component is created (mounted), updated, or removed from the DOM (unmounted). They are primarily used in class components, but with the introduction of hooks, functional components can achieve similar functionality.

// TODO :- tell me mounting , updating , unmounting , we use same useEffect or make some changes in useEffect ?
// * Ans :- When using React's useEffect hook for mounting, updating, and unmounting a component, you use the same useEffect function but strategically adjust the dependency array to control when the effect runs; essentially, the key is to specify which values in the array should trigger the effect to re-run on updates and to return a cleanup function when necessary for unmounting behavior.

// TODO :- what are the parameters we pass in useEffect for mounting , deleting , unmounting the component ?
// * Ans :-To handle mounting, updating, and unmounting in React functional components using useEffect, you pass a callback function as the first argument and an optional dependency array as the second.

// TODO :- what is the purpose of keys in react ?
// * Ans :- Keys in React serve the purpose of uniquely identifying elements within lists or collections of rendered components. When React updates the DOM, it uses keys to determine which items have been added, changed, or removed. This mechanism is crucial for efficient rendering and maintaining the correct state of components.
// * Without keys, React would have to re - render all elements in a list whenever any change occurs, leading to performance issues, especially in large lists.Keys provide a stable identity for each element, allowing React to update only the necessary components, optimizing performance.
// * It's important to use unique and stable keys, such as IDs from a database or unique identifiers generated on the server. Using array indexes as keys is generally discouraged, as they can change when the list is reordered or modified, leading to unexpected behavior and potential bugs.

// TODO :- what is HOC (Higher Order Component) with example ?
// * Ans :- A Higher-Order Component (HOC) is a function that takes a component as an argument and returns a new component with enhanced functionality. It's a pattern in React that promotes code reuse and separation of concerns. HOCs are similar to higher-order functions, which take functions as arguments and return new functions

// -------------------------------------------------------------------------------

// ^ HTML :-

// TODO :- difference between datalist tag & select tag ?
// * Ans :- The datalist tag is used to define a list of options for input elements like the select tag. It allows you to create a list of options that can be used to populate the options of an input element.
// * The select tag is used to create a dropdown list that allows the user to choose an option from a list of options. It's typically used in forms to collect user input.

// TODO :- difference between cells padding & cells spacing ?
// * Ans :- Cells padding is the space between the content of the cell and the cell's border, while cells spacing is the space between cells in a table.

// TODO :- what is void elements in html ?
// * Ans :- Void elements are elements that do not have a closing tag, such as <br>, <img>, and <input>. They are self-closing elements and do not require a closing tag.

// TODO :- is it possible to change inline element to block element ?
// * Ans :- No, you cannot change inline elements to block elements. Inline elements do not have a closing tag, and block elements require a closing tag.

// TODO :- Difference between em tag & i tag ?
// * Ans :- The em tag is used to create emphasized text, while the i tag is used to create italicized text.

// TODO :- what is image map ?
// * Ans :- An image map is a way to associate a specific area of an image with a specific location on a web page. It allows you to create clickable areas on an image that link to different parts of a webpage.

// TODO :- use of required attribue used in html ?
// * Ans :-  The required attribute in HTML is used to specify that a form input element is required, meaning that the user must fill in a value before the form can be submitted. It is often used in conjunction with the pattern attribute to specify a specific pattern for the input value.

// TODO :- layout of html ?
// * Ans :- The layout of an HTML document typically includes the following elements:
// * The <head> element contains the document's metadata, such as title, character set, and stylesheets.
// * The <body> element contains the visible content of the document, such as headings, paragraphs, images, and other elements.
// * The <header> element contains the header content of the document, such as navigation links or a logo.
// * The <main> element contains the main content of the document, such as the main body of text or sections.
// * The <footer> element contains the footer content of the document, such as copyright information or contact information.

// TODO :- difference between meter tag & progress tag ?
// * Ans :- The meter tag is used to create a gauge or progress bar, while the progress tag is used to create a progress bar that indicates the completion of a task or process.

// --------------------------------------------------------------------

// ^ CSS :-

// TODO :- what is important property in css ?
// * Ans :- The !important rule in CSS is used to add more importance to a property/value than normal.
// * In fact, if you use the!important rule, it will override ALL previous styling rules for that specific property on that element!

// TODO :- how can u vertical center a text in css ?
// * Ans :- To vertically center text in CSS, you can use the text-align property with the value of center. Here's an example:
// * text-align: center;

// TODO :- what is universal selector ?
// * Ans :- The universal selector * is used to select all elements on the page. It's often used to reset the default styles of elements or to apply styles to all elements in a specific style sheet.

// TODO :- how can we add gradient in css ?
// * Ans :- To add a gradient background to an element in CSS, you can use the background-image property with a linear-gradient function. Here's an example:
// * background-image: linear-gradient(to bottom, #ff0000, #00ff00);

// TODO :- difference between display hidden & visibility hidden ?
// * Ans :- The display property is used to control the visibility and layout of an element, while the visibility property is used to control the visibility of an element without affecting its layout.