//everything inside JS IS an object
//this always points to the object ❌

// -----
//how many types of this do we have? => 5

// -------Bible/granth/kuraan-------
//this depends on how it is being called upon
// ---------------------------------

// 1. function invokation ✅
// 2. method invokation ✅
// 3. constructor invokation ✅
// -----
// 4, indriect calling (call , bind , apply)
// 5. arrow functions

// ---------------------------------------------

// 1. direct functional invokation -> always points to the window object
// function sam() {
//   console.log(this);
// }
// sam();

// 2. method invokation => always points to the obj inside which method is defined
// let obj = {
//   a: 10,
//   b: 30,
//   fn: function () {
//     console.log(this);
//   },
// };

// obj.fn();

// ----------------

// let obj = {
//   a: 10,
//   b: 30,
//   fn: function () {
//     console.log(this);
//   },
// };
// obj.fn();

// ----------------

// let obj = {
//   a: 10,
//   b: 30,
//   fn: function () {
//     console.log(this); //obj - 1
//     let a = function () {
//       console.log(this); //window
//     };
//     a();
//   },
// };
// obj.fn();

// ------------

// let obj = {
//   naam: "samarth",
//   umar: 34,
//   fn: function () {
//     console.log(this);
//   },
// };

// obj.fn();
// let ans = obj.fn;

// ans();

// ----------------

// 3. constructor invokation => always points to the newly created object

function Sam(dog, umar) {
  this.naam = dog;
  this.age = umar;
}

let person1 = new Sam("maverick", 2);
let person2 = new Sam("bruno", 5);
console.log(person1);
