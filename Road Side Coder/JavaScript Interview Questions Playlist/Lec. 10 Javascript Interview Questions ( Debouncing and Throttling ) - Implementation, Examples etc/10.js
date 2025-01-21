// ^ Debouncing and Throttling in Javascript
// & Ques 1 - Create a button UI and debounce as follows =>
// *           --> Show "Button Pressed <X> Times" every time button is pressed
// !           --> Increase "Triggered <Y> Times" count after 800ms of debounce

// const btn = document.querySelector(".increment-btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// let pressedCount = 0;
// let triggerCount = 0;

// const debouncedCount = _.debounce(() => {
//   count.innerHTML = ++triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   debouncedCount();
// });

//---------------------------------------------------------------------------

// ~ Throttle

// & Ques 2 - Create a button UI and add throttle as follows =>
// *           --> Show "Button Pressed <X> Times" every time button is pressed
// !           --> Increase "Triggered <Y> Times" count after 800ms of debounce

// const btn = document.querySelector(".increment-btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// let pressedCount = 0;
// let triggerCount = 0;

// const throttleCount = _.throttle(() => {
//   count.innerHTML = ++triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   throttleCount();
// });