// console.log(a);
// var a = 10;
// function sam() {
//   console.log(a);
// }

// sam();

//lexical scoping = local memory + parent lexical scope

// -------------------

// console.log(a);
// var a = 10;
// function sam() {
//   console.log(a);
//   var a = 100;
// }

// sam();

// ---------------

// console.log(a);
// var a = 10;
// if (true) {
//   console.log(a);
//   var a = 100;
// }

// console.log(a);

// ----------------

// var a = 10;
// let b = 1000;

// function sam() {
//   var c = 100;
//   let d = 200;
// }

// sam();

// ---------------

// var a = 10;
// let b = 1000;

// function sam() {
//   var a = 100;
//   let b = 200;
// }

// sam();

// ---------

var a = 10;
let b = 1000;

if (true) {
  var a = 100;
  let b = 200;
}
