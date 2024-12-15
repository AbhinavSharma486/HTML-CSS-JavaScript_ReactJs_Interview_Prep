// ~ Example of Currying :-

// function f(a) {
//   return function (b) {
//     return `${a} ${b}`;

//   };
// }

// console.log(f(5)(6));

// ! Question 1 :- sum(2)(6)(1)

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(2, 6, 1);

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(sum(2)(6)(1));

/*
  ^ Question 2 : -
  evaluate("sum")(4)(2) => 6;
  evaluate("substract")(4)(2) => 2;
  evaluate("multiply")(4)(2) => 8;
  evaluate("divide")(4)(2) => 2;
*/

// function evaluate(operation) {
//   return function (a) {
//     return function (b) {
//       if (operation === "sum") return a + b;
//       else if (operation === "substract") return a - b;
//       else if (operation === "multiply") return a * b;
//       else if (operation === "divide") return a / b;
//       else return "Invalid Operation";
//     };
//   };
// }

// console.log("sum", evaluate("sum")(5)(8));
// console.log("substract", evaluate("substract")(5)(8));
// console.log("multiply", evaluate("multiply")(5)(8));
// console.log("divide", evaluate("divide")(5)(8));

// & Question 3 : Infinite Currying -> sum(1)(2)(3)...(n)

// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     return a;
//   };
// };

// console.log(add(5)(2)(4)(8)()); // output will be : 19

// * Question 4 : Currying v/s Partial Application

// ? Partial Application example :-

// function sum(a) {
//   return function (b, c) {
//     return a + b + c;
//   };
// }

// const x = sum(10);
// console.log(x(5, 6));
// console.log(x(3, 2));


// ~ Currying example :-

// console.log(sum(20)(1, 4));

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// ! Manipulating DOM :-

// function updateElementText(id) {
//   return function (content) {
//     document.querySelector("#" + id).textContent = content;
//   };
// }

// const updateHeader = updateElementText("heading");
// updateHeader("Hello RoadSide coder");

// ^ Question 5 : curry() implementation
// & converts f(a,b,c) into f(a)(b)(c)

function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    }
    else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;

const totalSum = curry(sum);

console.log(totalSum(1)(2)(3));
