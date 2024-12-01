var variable = 10;

// * IIFE(immediately invoked function expression)
(() => {
  console.log(variable);

  variable = 20;

  console.log(variable);
})();

console.log(variable);

var variable = 30;

// & Out put will be
// * 10
// ~ 20
// ! 20