var fullname = "Abhinav Sharma";

var obj = {
  fullname: "Hacked full name",

  prop: {
    fullname: "Inside Prop",
    getFullname: function () {
      return this.fullname;
    },
  },

  getFullname: function () {
    return this.fullname;
  },

  getFullnameV2: () => this.fullname, // window in browser

  getFullnameV3: (function () {
    return this.fullname;
  })(), // & IFFE (Immediately Invoked Function Expression)
};

console.log(obj.prop.getFullname());
console.log(obj.getFullname());
console.log(obj.getFullnameV2());
console.log(obj.getFullnameV3());

// * Expected Output will be
// ~ Inside prop
// ! Hacked full name
// ^ undefined
// & Error getFullnameV3 is not a function
