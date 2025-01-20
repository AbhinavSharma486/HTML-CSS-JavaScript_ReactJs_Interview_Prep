// ~ What is Promise
// ! Promises in JavaScript
// ^ Synchronous v/s Asynchronous Code

// & Synchronous Code

// console.log("Start");
// console.log("subscribe to roadside coder");
// console.log("Finish");

//----------------------------------------------------------------------------------

// * Asynchronous Code

// console.log("Start");

// setTimeout(() => {
//   console.log("subscribe to roadside coder");
// }, 1000);

// console.log("Finish");

//----------------------------------------------------------------------------------

// * Asynchronous Code

// console.log("Start"); // start

// function importantAction(username) {
//   setTimeout(() => {
//     return `subscribe to ${username}`;
//   }, 1000);
// }

// const message = importantAction("Roadside coder");

// console.log(message); // undefined

// console.log("Stop"); // stop

//----------------------------------------------------------------------------------

// ? Callbacks

// console.log("Start"); // start

// function importantAction(username, cb) {
//   setTimeout(() => {
//     cb(`subscribe to ${username}`);
//   }, 0);
// }

// const message = importantAction("Roadside coder", function (message) {
//   console.log(message); // subscribe to roadside coder
// });

// console.log("Stop"); // stop

//----------------------------------------------------------------------------------

// ~ Callbacks Hell

// console.log("Start"); // start

// function importantAction(username, cb) {
//   setTimeout(() => {
//     cb(`subscribe to ${username}`);
//   }, 1000);
// }

// function likeTheVideo(video, cb) {
//   setTimeout(() => {
//     cb(`Like the ${video} video`);
//   }, 0);
// }

// function shareTheVideo(video, cb) {
//   setTimeout(() => {
//     cb(`Share the ${video} video`);
//   }, 2000);
// }

// const message = importantAction("Roadside coder", function (message) {
//   console.log(message); // subscribe to roadside coder
//   likeTheVideo("Javascript interview questions", (action) => {
//     console.log(action); // Like the Javascript interview questions
//     shareTheVideo("Javascript interview questions", (action) => {
//       console.log(action);
//       shareTheVideo("Javascript interview questions", (action) => {
//         console.log(action);
//         shareTheVideo("Javascript interview questions", (action) => {
//           console.log(action);
//           shareTheVideo("Javascript interview questions", (action) => {
//             console.log(action);
//             shareTheVideo("Javascript interview questions", (action) => {
//               console.log(action);
//               shareTheVideo("Javascript interview questions", (action) => {
//                 console.log(action);
//                 shareTheVideo("Javascript interview questions", (action) => {
//                   console.log(action);
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

// console.log("Stop");

//----------------------------------------------------------------------------------

// ! Promises

// console.log("Start");

// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = false;
//     if (result) resolve("Subscribe to Roadside coder");
//     else reject(new Error("why aren't you subscribed to Roadside coder"));
//   }, 2000);
// });

// sub
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("Stop");

//----------------------------------------------------------------------------------

// ^ Promise resolve and Promise reject

// console.log("Start");

// Promise.resolve("Subscribe to Roadside coder");

// console.log("Stop");

//----------------------------------------------------------------------------------

// & Rewriting callbacks with promises

// console.log("Start"); // start

// function importantAction(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`subscribe to ${username}`);
//     }, 1000);
//   });
// }

// function likeTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Like the ${video} video`);
//     }, 1000);
//   });
// }

// function shareTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Share the ${video} video`);
//     }, 1000);
//   });
// }

// importantAction("Roadside coder")
//   .then((res) => {
//     console.log(res);
//     likeTheVideo("javascript interview questions")
//       .then((res) => {
//         console.log(res);
//         shareTheVideo("javascript interview question playlist")
//           .then((res) => {
//             console.log(res);
//           })
//           .catch((err) => console.log(err));
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

// console.log("Stop");

//----------------------------------------------------------------------------------

// * Promises Chaining

// console.log("Start"); // start

// function importantAction(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`subscribe to ${username}`);
//     }, 1000);
//   });
// }

// function likeTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Like the ${video} video`);
//     }, 1000);
//   });
// }

// function shareTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Share the ${video} video`);
//     }, 1000);
//   });
// }

// importantAction("Roadside coder")
//   .then((res) => {
//     console.log(res);
//     return likeTheVideo("javascript inteview questions");
//   }).then((res) => {
//     console.log(res);
//     return shareTheVideo("Javascript question playlist");
//   }).then((res) => {
//     console.log(res);
//   });

// console.log("Stop");

//----------------------------------------------------------------------------------

// ? Promise.all()

// console.log("Start"); // start

// function importantAction(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`subscribe to ${username}`);
//     }, 1000);
//   });
// }

// function likeTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`Like the ${video} video`);
//     }, 1000);
//   });
// }

// function shareTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Share the ${video} video`);
//     }, 1000);
//   });
// }

//   Promise.all([
//     importantAction("Roadside coder"),
//     likeTheVideo("javascript interview questions"),
//     shareTheVideo("javascript inteview questions playlist")
//   ]).then((res) => {
//     console.log(res);
//   }).catch((err) => {
//     console.log("Error : Promises failed", err);
//   })

// console.log("Stop");

//----------------------------------------------------------------------------------

// ~ Promise.race()

// console.log("Start"); // start

// function importantAction(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`subscribe to ${username}`);
//     }, 1000);
//   });
// }

// function likeTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`Like the ${video} video`);
//     }, 100);
//   });
// }

// function shareTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Share the ${video} video`);
//     }, 500);
//   });
// }

//   Promise.race([
//     importantAction("Roadside coder"),
//     likeTheVideo("javascript interview questions"),
//     shareTheVideo("javascript inteview questions playlist")
//   ]).then((res) => {
//     console.log(res);
//   }).catch((err) => {
//     console.log("Error : Promises failed", err);
//   })

// console.log("Stop");

//----------------------------------------------------------------------------------

// ~ Promise.allSettled()

// console.log("Start"); // start

// function importantAction(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`subscribe to ${username}`);
//     }, 1000);
//   });
// }

// function likeTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`Like the ${video} video`);
//     }, 100);
//   });
// }

// function shareTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Share the ${video} video`);
//     }, 500);
//   });
// }

// Promise.allSettled([
//   importantAction("Roadside coder"),
//   likeTheVideo("javascript interview questions"),
//   shareTheVideo("javascript inteview questions playlist")
// ]).then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log("Error : Promises failed", err);
// });

// console.log("Stop");

//----------------------------------------------------------------------------------

// ! Promise.any()

// console.log("Start"); // start

// function importantAction(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`subscribe to ${username}`);
//     }, 1000);
//   });
// }

// function likeTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`Like the ${video} video`);
//     }, 100);
//   });
// }

// function shareTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Share the ${video} video`);
//     }, 500);
//   });
// }

// Promise.any([
//   importantAction("Roadside coder"),
//   likeTheVideo("javascript interview questions"),
//   shareTheVideo("javascript inteview questions playlist")
// ]).then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log("Error : Promises failed", err);
// });

// console.log("Stop");

//----------------------------------------------------------------------------------

// ^ Async await

// console.log("Start"); // start

// function importantAction(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`subscribe to ${username}`);
//     }, 1000);
//   });
// }

// function likeTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Like the ${video} video`);
//     }, 100);
//   });
// }

// function shareTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`Share the ${video} video`);
//     }, 500);
//   });
// }

// const result = async () => {
//   try {
//     const message1 = await importantAction("Roadside coder");
//     const message2 = await likeTheVideo("Roadside coder");
//     const message3 = await shareTheVideo("Roadside coder");

//     console.log({ message1, message2, message3 });
//   } catch (error) {
//     console.log("Error : ", error);
//   }
// };

// result();

// console.log("Stop");

//----------------------------------------------------------------------------------

// & Question 1 :- Output based questions

// console.log("Start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");

// start
// 1
// end
// 2

//----------------------------------------------------------------------------------

// * Question 2 :- Output based questions

// console.log("Start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
//   console.log(3);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");

// start
// 1
// 3
// end
// 2

//----------------------------------------------------------------------------------

// ? Question 3 :- Output based questions

// console.log("Start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   console.log(3);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");

// start
// 1
// 3
// end

//----------------------------------------------------------------------------------

// ~ Question 4:- Output based questions

// console.log("Start");

// const fn = () =>
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("Success");
//   });

// console.log("middle");

// fn().then((res) => {
//   console.log(res);
// });


// console.log("end");

// start
// middle
// 1
// end
// success

//----------------------------------------------------------------------------------

// ! Question 5:- Output based questions

// function job() {
//   return new Promise(function (resolve, reject) {
//     reject();
//   });
// }

// let promise = job();

// promise
//   .then(function () {
//     console.log("Success 1");
//   })
//   .then(function () {
//     console.log("Success 2");
//   })
//   .then(function () {
//     console.log("Success 3");
//   })
//   .catch(function () {
//     console.log("Error 1");
//   })
//   .then(function () {
//     console.log("Success 4");
//   });

// Error 1
// Success 4


//----------------------------------------------------------------------------------

// ^ Question 6:- Output based questions

// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve("success");
//     }
//     else {
//       reject("error");
//     }
//   });
// }

// let promise = job(true);

// promise
//   .then(function (data) {
//     console.log(data);

//     return job(false);
//   })
//   .catch(function (error) {
//     console.log(error);

//     return "Error caught";
//   })
//   .then(function (data) {
//     console.log(data);

//     return job(true);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// success
// error
// Error caught

//----------------------------------------------------------------------------------

// & Question 7:- Output based questions

// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve("success");
//     }
//     else {
//       reject("error");
//     }
//   });
// }

// let promise = job(true);

// promise
//   .then(function (data) {
//     console.log(data);

//     return job(true);
//   })
//   .then(function (data) {
//     if (data !== "victory") {
//       throw "Defeat";
//     }

//     return job(true);
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);

//     return job(false);
//   })
//   .then(function (data) {
//     console.log(data);

//     return job(true);
//   })
//   .catch(function (error) {
//     console.log(error);

//     return "Error Caught";
//   })
//   .then(function (data) {
//     console.log(data);

//     return new Error("text");
//   })
//   .then(function (data) {
//     console.log("Success:", data.message);
//   })
//   .catch(function (data) {
//     console.log("Error:", data.message);
//   });

// success
// Defeat
// error
// Error Caught
// Success: text

//----------------------------------------------------------------------------------

// * Question 8:- Promise Chaining

// const firstPromise = new Promise((resolve, reject) => {
//   resolve("First!");
// });

// const secondPromise = new Promise((resolve, reject) => {
//   resolve(firstPromise);
// });

// secondPromise
//   .then((res) => {
//     return res;
//   })
//   .then((res) => console.log(res));

// First!

//------------------------------------------------------------------------

// ~ Question 9:- Rewrite this example code using "async/await"
// ! Instead of using ".then/catch"

// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (Response.status == 200) {
//       return response.json();
//     }
//     else {
//       throw new Error(response.status);
//     }
//   });
// }

// loadJson("https://fakeurl.com/no-such-user.json").catch((err) => console.log(err));

// ^  Convert above code into async await
// async function loadJson(url) {
//   let response = await fetch(url);

//   if (response.status == 200) {
//     let json = await response.json();
//     return json;
//   }

//   throw new Error(response.status);
// };

//------------------------------------------------------------------------

// & Question 10:- Solve Promise Recursively

// function importantAction(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`subscribe to ${username}`);
//     }, 1000);
//   });
// }

// function likeTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Like the ${video} video`);
//     }, 100);
//   });
// }

// function shareTheVideo(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`Share the ${video} video`);
//     }, 500);
//   });
// }

// function promRecurse(funcPromises) {
//   // Write implementation here

//   if (funcPromises.length === 0) return;

//   const currPromise = funcPromises.shift();

//   currPromise
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

//   promRecurse(funcPromises);
// }

// promRecurse([
//   importantAction("Roadside coder"),
//   likeTheVideo("javascript interview questions"),
//   shareTheVideo("Javascript question playlist")
// ]);