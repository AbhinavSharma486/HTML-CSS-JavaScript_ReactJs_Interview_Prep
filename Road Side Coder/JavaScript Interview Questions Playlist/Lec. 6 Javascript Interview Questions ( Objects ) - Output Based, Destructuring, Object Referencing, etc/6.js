// ~ What are objects in javascript :-

// const user = {
//   name: "Abhinav Sharma",
//   age: 21
// };

// user.name = "Vasu Parashar";
// delete user.age;

// console.log(user);

// ! Question 1 :- Interview question on delete keyword

// ^ [i]
// const func = (function (a) {
//   delete a;
//   return a;
// })(5);

// console.log(func); // 5

// & [ii]
// const user = {
//   name: "Abhinav Sharma",
//   age: 21,
//   "like this video": true,
// };

// console.log(user["like this video"]); // true

// * [iii]
// const user = {
//   name: "Abhinav Sharma",
//   age: 21,
//   "like this video": true,
// };

// delete user["like this video"];

// console.log(user["like this video"]); // undefined
// console.log(user);


// ? Computed Properties :-

// const property = "firstName";
// const name = "Abhinav Sharma";

// const user = {
//   [property]: name
// };

// console.log(user);

// ~ Looping through objects :-

// const user = {
//   name: "Abhinav Sharma",
//   age: 21,
//   isTotallyAwesome: true,
// };

// for (key in user) {
//   console.log(key, user[key]);
// }

// ! Question 2 :- What's the output

// const obj = {
//   a: "one",
//   b: "two",
//   a: "three",
// };

// console.log(obj);

// ^ Question 3 :- Create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2.


// let nums = {
//   a: 100,
//   b: 200,
//   title: "My nums",
// };

// multiplyNumeric(nums);

// function multiplyNumeric(obj) {
//   for (key in obj) {
//     if (typeof obj[key] == "number") {
//       obj[key] *= 2;
//     }
//   }
// }

// console.log(nums);

// & Question 4 :- What's the output of the following code ?

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123; // a["[object-object]"] = 123
// a[c] = 456; // a["[object-object]"] = 456

// console.log(a[b]); // 456

// * Question 5 :- What's JSON.stringify and JSON.parse ?

// const user = {
//   name: "Abhinav Sharma",
//   age: 21,
// };

// const resultObj = JSON.stringify(user);

// console.log(resultObj);
// console.log(JSON.parse(resultObj));

// ? Question 6 :- What's the output

// console.log([..."Lydia"]); // ['L', 'y', 'd', 'i', 'a']

// ~ Question 7 :- What's the output

// const user = { name: "Lydia", age: 21 };
// const admin = { admin: true, ...user }; // { admin: true, name: 'Lydia', age: 21 }

// console.log(admin);

// ! Question 8 :- What's the output

// const setting = {
//   username: "Abhinav",
//   level: 19,
//   health: 90,
// };

// const data1 = JSON.stringify(setting, ["level", "health"]); // stringify only level and health
// const data2 = JSON.stringify(setting); // stringify whole object
// console.log(data1);
// console.log(data2);

// ^ Question 9 :- What's the output

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter()); // 20
// console.log(shape.perimeter()); // NAN

// & Question 10 :- What is Destructuring in objects ?

// let user = {
//   name: "Abhinav",
//   age: 24,
//   fullName: {
//     first: "Abhinav",
//     last: "Sharma"
//   }
// };

// const { name, age } = user;

// console.log(name, age);

// const {
//   fullName: { first },
//   fullName: { last },
// } = user;


// console.log(first, last);

// * Question 11 :- What's the output

// function getItems(fruitList, favoriteFruit, ...args) {
//   return [...fruitList, ...args, favoriteFruit];
// };

// console.log(getItems(["banana", "apple"], "pear", "orange"));

// ? Question 12 :- What's the output

// let c = { greeting: "Hey!" };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting); // Hello

// ~ Question 13 :- What's the output

// console.log({ a: 1 } == { a: 1 }); // false
// console.log({ a: 1 } === { a: 1 }); // false

// ! Question 14 :- What's the output

// let person = { name: "Lydia" };
// const members = [person];

// person = null;
// console.log(members); // [ { name: 'Lydia' } ]

// person.name = null;
// console.log(members); // [ { name: null } ]

// ^ Question 15 :- What's the output

// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };

// multiply(); // 20
// multiply(); // 20
// multiply(value); // 20
// multiply(value); // 40

// & Question 16 :- What's the output

// function changeAgeAndReference(person) {
//   person.age = 25;
//   person = {
//     name: "Abhinav",
//     age: 50,
//   };

//   return person;
// }

// const personObj1 = {
//   name: "Ajay",
//   age: 30,
// };

// const personObj2 = changeAgeAndReference(personObj1);

// console.log(personObj1); // { name: 'Ajay', age: 25 }
// console.log(personObj2); // { name: 'Abhinav', age: 50 }

// * What's Shallow copy and Deep copy ?

// ? Question 17 :- How to deep copy / clone an object ?
// ~ There are 3 ways to clone an object

// ! Ist way :-
// let user = {
//   name: "Abhinav Sharma",
//   age: 21,
// };

// const objClone = Object.assign({}, user);

// console.log(user, objClone);

// ^ IInd way :-


// let user = {
//   name: "Abhinav Sharma",
//   age: 21,
// };

// const objClone = JSON.parse(JSON.stringify(user));

// console.log(user, objClone);

// & IIIrd way :-

let user = {
  name: "Abhinav Sharma",
  age: 21,
};

const objClone = { ...user };

console.log(user, objClone);
