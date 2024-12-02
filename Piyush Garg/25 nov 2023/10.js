const abhinav = {
  name: "Abhinav Sharma",
  sayName: function () {
    console.log(this.name);
  },
};

setTimeout(abhinav.sayName, 3 * 1000); // 3 seconds
setTimeout(abhinav.sayName.bind(abhinav), 3 * 1000);

// * Expected Output will be
// ~ Undefined
// ^ Abhinav Sharma
