// * Lecture video link : https://youtu.be/mtlqUsVb0BY?si=5ss1aYBlTNxH6WWn

// & HTML

// TODO : What is HTML

// TODO : why do we use HTML (what is the use case of HTML)

// TODO : what is semantic  tags in html
// * --> Ans. Examples of semantic HTML tags
// * <header>: Defines the header of a document or section
// * <footer>: Defines the footer of a document
// * <article>: Defines an independent, self-contained piece of content
// * <nav>: Defines a section of navigation links
// * <main>: Defines the main content of a document
// * <section>: Groups related content together
// * <time>: Represents a time-related piece of information;

// TODO : why cann't we use just div for everything (why do we use semantic tags)

// TODO : difference between div and span tags

// --------------------------------------------------------------------
// & CSS

// TODO : Explain css in detail

// TODO : What is block level element and what is inline level element

// TODO : box model in css

// TODO : what is the default value of box sizing

// TODO : what is Specificity in css
// * Ans --> ., #, span, important



// TODO : what are different types of data types in js
// * Ans --> There are 2 types of data types in js
// ^ 1. Primitive data types  --> Number, string , boolean, null, undefined, BigInt, symbol(ES6)

// ! 2. Non-Primitive data types  --> Array, Object, Function, Date Object, Regular Expression (RegExp)




// TODO : write an array and console.log its type

// let arr = [1, 2, 3, 4];

// console.log(typeof (arr)); // object


// TODO : what is the type of null
// console.log(typeof (null)); // object : it is a bug in js from long time

// TODO : difference between var & let & const
// ^ var :-
// * Ans --> it is global scope variable

// var a = 5;
// console.log(a); // 5

// {
//   var a = 5;
// }
// console.log(a); // 5


// function outsideVar() {
//   var a = 5; // here var becomes block scope variable
// }

// console.log(a); // undefined


// ^ let :-
// * Ans --> it is a block scope variable

// let a = 5;
// console.log(a); // 5

// {
//   let a = 5;
// }
// console.log(a); // undefined

// ^ const :-
// * Ans -> it is a block scope variable

// const a = 5;
// console.log(a); // 5

// {
//   const a = 5;
// }

// console.log(a); // undefined


// TODO : Output based questions answers

// var x = 20;

// function foo() {
//   console.log(x); // undefined : hoisting doesn't work
//   var x = 10;
//   console.log(x); // 10
// }

// foo();

// TODO : Output based questions answers

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// console.log("End");

// Start
// End
// Timeout


// TODO : Output based questions answers

// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i); // 4
//   }, 1000);
// }

// 4

// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// 1
// 2
// 3

// TODO : make a todo list web app

// const todoInput = document.querySelector("#todoInput");
// const addButton = document.querySelector("#addButton");
// const todoListContainer = document.querySelector("#todoListContainer");

// // Function to add a new todo
// function addTodoItem(task) {

//   // create a new div element for the todo item
//   const todoItem = document.createElement('div');
// todoItem.classList.add('todo-item');

//   // create a span for the task
//   const taskText = document.createElement('span');
//   taskText.textContent = task;

//   // create a delete button for the todo item
//   const deleteButton = document.createElement('button');
//   deleteButton.textContent = 'Delete';
//   deleteButton.classList.add('delete-button');

//   // add event listener to the delete button
//   deleteButton.addEventListener('click', () => {
//     todoItem.remove(); // remove the todo item
//     saveTasksToLocalStorage(); // save updated list to local storage
//     checkVisibility(); // check if the list should be hidden
//   });

//   // Append the task text and delete button to the todo item
//   todoItem.appendChild(taskText);
//   todoItem.appendChild(deleteButton);

//   // Append the todo item to the todo list container
//   todoListContainer.appendChild(todoItem);
// }

// // Functionality to check if the todo list container should be visible
// function checkVisibility() {
//   if (todoListContainer.children.length === 0) {
//     todoListContainer.classList.add('hidden');
//   }
//   else {
//     todoListContainer.classList.remove('hidden');
//   }
// }

// // save task to the local storage
// function saveTasksToLocalStorage() {
//   const tasks = [];

//   document.querySelectorAll('.todo-item span').forEach((taskSpan) => {
//     tasks.push(taskSpan.textContent);
//   });
//   localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// // Load tasks from local storage
// function loadTasksFromLocalStorage() {
//   const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//   savedTasks.forEach((task) => addTodoItem(task));
//   checkVisibility();
// }

// addButton.addEventListener("click", () => {
//   const task = todoInput.value.trim(); // get input value from input box and trim white space

//   if (task) {
//     addTodoItem(task);
//     saveTasksToLocalStorage();
//     checkVisibility();

//     // clear the input box field
//     todoInput.value = "";
//   }
//   else {
//     alert("Please enter a task");
//   }

// });

// // on page load, initializes the todo list
// loadTasksFromLocalStorage();
// checkVisibility();

