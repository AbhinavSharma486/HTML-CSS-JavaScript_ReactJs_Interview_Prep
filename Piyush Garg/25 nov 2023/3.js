myFun();

var myFun = function () {
  console.log("First");
};

myFun();

function myFun() {
  console.log("Second");
}

myFun();


// & Output will be 
// ~ Second 
// ! First 
// ! First 