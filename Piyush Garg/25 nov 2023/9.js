const abhinav = {
  name: "Abhinav Sharma",
  sayName: function () {
    console.log(this.name);
  },
};

const jhon = {
  name: "Jhon Doe",
  sayName: function () {
    console.log(this.name);
  },
};

jhon.sayName.call(abhinav);

// * Expected Output will be
// ~ Abhinav Sharma
