// ^ Hoisting example

foo = 30;
console.log("Foo", foo);

var foo = 100;

console.log("Foo", foo);

// * Output will be
// & Foo 30
// ^ Foo 100
