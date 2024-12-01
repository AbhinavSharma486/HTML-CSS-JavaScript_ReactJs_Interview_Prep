variable = 30;

(() => {
  foo = 100;
  console.log(variable);

  var foo = 100;
  variable = 20;

  console.log(variable);
})();

console.log(foo); // ! Give error here as foo is not defined
console.log(variable);
var variable = 30;

// * Output will be
// ^ Give error here as foo is not defined
// 10
// 20
// 30