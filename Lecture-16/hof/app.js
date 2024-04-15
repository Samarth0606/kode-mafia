// function a(x) {
//   //   console.log(x);
//   x();
//   console.log("i am inside the a func");
// }

// function b() {
//   console.log("i am inside the b func");
// }

// // a(10);
// // a("sam");
// // a(true);

// a(b);

//hof
// 1. func which accepts some other func as an argument -> a

// -------------
//or
// -------------

// function a() {
//   console.log("i am inside a");

//   function b() {
//     console.log("i am inside b");
//   }
//   return b;
// }

// let ret = a();
// console.log(ret);
// ret();
// 2. func which can return the entire function as a returned value

// ---------------------------

// What are callback function.
//=>when we pass a function(b)as an argument to HOF ❌
//=>when we pass a function(b)as an argument to HOF+mandatory to call that b function inside HOF✅

// function a(x) {
//   console.log(x);
//   x();

//   console.log("i am inside the a func");
// }

// function b() {
//   console.log("i am inside the b func");
// }

// a(b);

// -------------------------
