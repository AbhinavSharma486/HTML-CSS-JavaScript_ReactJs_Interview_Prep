// * map, filter and reduce :-

// ~ What is map()
// ! How a map works
// Question 1:-
// const nums = [1, 2, 3, 4];

// const multiply3 = nums.map((num, i, arr) => {
//   return num * 3;
// });

// console.log(multiply3);
//  Expected Output will be
// [3, 6, 9, 12];

// & What is filter()
// * How a filter works
// Question 2:-
// const nums = [1, 2, 3, 4];

// const moreThan2 = nums.filter((num, i, arr) => {
//   return num > 2;
// });

// console.log(moreThan2);
// Expected Output will be
// [3, 4];

// ? What is reduce()
// ~ How reduce works
// Question 3:-
// const nums = [1, 2, 3, 4];

// const sum = nums.reduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);

// console.log(sum);
// Expected Output will be
// 10

// ! Polyfills for map :-
// Question 4:-
// Array.map((num, i, arr) => { });

// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this));
//   }

//   return temp;
// };

// const nums = [1, 2, 3, 4];
// const multiplyThree = nums.myMap((num, i, arr) => {
//   return num * 3;
// });

// console.log(multiplyThree);

// ^ Polyfil for filter :-
// Question 5:-
// Array.prototype.myFilter = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       temp.push(this[i]);
//     }
//   }

//   return temp;
// };

// const nums = [1, 2, 3, 4];
// const moreThanTwo = nums.myFilter((num) => {
//   return num > 2;
// });

// console.log(moreThanTwo);

// & Polyfil for reduce :-
// Question 6:-
// arr.reduce((acc, curr, i, arr) => { }, initialValue);

// Array.prototype.myReduce = function (cb, initialValue) {
//   var accumulator = initialValue;

//   for (let i = 0; i < this.length; i++) {
//     accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
//   }

//   return accumulator;
// };

// const nums = [1, 2, 3, 4];

// const sum = nums.myReduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);

// console.log(sum);

// * map v/s forEach :-
// const arr = [2, 5, 3, 4, 7];

// const mapResult = arr.map((arr) => {
//   return arr + 2;
// });  // [4, 7, 5, 6, 9]

// const forEachResult1 = arr.forEach((arr) => {
//   return arr + 2;
// });  // undefined

// const forEachResult2 = arr.forEach((ar, i) => {
//   arr[i] = ar + 3;
// }); // it will modify the original array [5, 8, 6, 7, 10]

// console.log(mapResult); // [4, 7, 5, 6, 9]
// console.log(forEachResult1); // undefined
// console.log(forEachResult2); // undefined
// console.log(arr);  // [5, 8, 6, 7, 10]

// ? Output Based Questions :-
// Question 7:-
let students = [
  { name: "Abhinav", rollNumber: 31, marks: 97 },
  { name: "Ajay", rollNumber: 15, marks: 77 },
  { name: "LoveMalik", rollNumber: 16, marks: 67 },
  { name: "Arnav", rollNumber: 7, marks: 47 },
];

// ~ [i] = Return All students name in capital letter

// const studentsNameCapital = students.map((student) => {
//   return student.name.toUpperCase();
// });

// console.log(studentsNameCapital);

// ! [ii] = Return only details of those who scored more than 60 marks

// const moreThan60Marks = students.filter((stu) => {
//   return stu.marks > 60;
// });

// console.log(moreThan60Marks);

// ^ [iii] = Return only detail of those whose scored more than 60 and rollNumber more than 15

// const moreThan60MarksAndRollNumberMoreThan15 = students.filter((stu) => {
//   return stu.marks > 60 && stu.rollNumber > 15;
// });

// console.log(moreThan60MarksAndRollNumberMoreThan15);

// & [iv] = Return total marks of all students:-

// const totalStudentMarks = students.reduce((acc, curr) => {
//   return acc + curr.marks;
// }, 0);

// console.log(totalStudentMarks);

// * Chaining map and filer
// ? [v] = Return only names of students who socred more than 60 

// const names = students.filter((stu) => {
//   return stu.marks > 60;
// }).map((stu) => {
//   return stu.name;
// });

// console.log(names);

// ~ Chaining map, filter and reduce
// ! [vi] = Return total marks of students, marks greater than 60 ,after 20 marks have been added to those who scored less than 60, in the last return total makrs of students

const totalMarka = students.map((stu) => {
  if (stu.marks < 60) {
    stu.marks += 20;
  }

  return stu;
})
  .filter((stu) => {
    return stu.marks > 60;
  })
  .reduce((acc, curr) => {
    return acc + curr.marks;
  }, 0);

console.log(totalMarka);
