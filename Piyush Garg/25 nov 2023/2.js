// & Here is the example of temporal dead zone & hoisting

age = 100;

console.log("Value of age is : ", age);

var age = 300;

console.log("Value of age is : ", age);

// & Output will be 
// * 100
// ^ 300