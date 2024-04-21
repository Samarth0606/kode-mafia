// console.log("start");
// console.log("run after 4 secs");
// console.log("end");

// -----------------------

// console.log("start");

// //2 args (cb , delay (ms))
// // setTimeout(function () {}, 4000);
// setTimeout(() => {
//   console.log("running after 4 s");
// }, 4000);

// console.log("end");

// -----------------------

// console.log("start");

// setTimeout(() => {
//   console.log("mai hu 4sec vaala");
// }, 4000);

// setTimeout(() => {
//   console.log("mai hu 2sec vaala");
// }, 2000);

// console.log("end");

// --------------------------------

// setTimeout(function () {
//   console.log("hello my frnds 1");
// }, 4000);

// setTimeout(function () {
//   console.log("hello my frnds 2");
// }, 2000);

// console.log("end");

// ------------------------

// console.log("start"); //0

// setTimeout(function () {
//   //4
//   console.log("hello my frnds 2");
// }, 2000);
// setTimeout(function () {
//   //2
//   console.log("hello my frnds 1");
// }, 4000);

// console.log("end"); //0

// --------------------

console.log("start");

setTimeout(function () {
  console.log("hello my frnds 2");
}, 0);
setTimeout(function () {
  console.log("hello my frnds 1");
}, 4000);

console.log("end");
