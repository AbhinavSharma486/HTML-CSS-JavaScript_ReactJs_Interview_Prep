const obj = {
  height: 30,
};

console.log(obj.height);

delete obj.height;

console.log(obj.height);

// * Expected Output will be
// ~ 30
// ! undefined
