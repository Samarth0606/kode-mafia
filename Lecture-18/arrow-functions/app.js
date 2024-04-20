// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(10, 30));

// ------------------------

// arrow functions
// let sum = (a, b) => a + b;
// -----------------

// function sqaure(n) {
//   return n * n;
// }
// sqaure(5);

// ----WAY-1------
// let sqaure = (n) => {
//   return n * n;
// };

// console.log(sqaure(5));

// ----WAY-2------
// let sqaure = (n) => n * n;
// console.log(sqaure(5));

// ----WAY-3------
// let sqaure = n => n * n;
// console.log(sqaure(5));

// -------------THIS KEYWORD--------------

// let obj = {
//   a: 10,
//   fn: function () {
//     function sam() {
//       console.log(this);
//     }
//     sam();
//   },
// };

// obj.fn();
// let ans = obj.fn;

// ans();
// --------------------------

// 5. arrow fuctions => this depends on parent ka this
// let obj = {
//   a: 10,
//   fn: function () {
//     console.log(this);
//     let sam = () => {
//       console.log(this);
//     };
//     sam();
//   },
// };

// obj.fn();

// -------

// let obj = {
//   a: 10,
//   fn: () => {
//     console.log(this);
//     let sam = () => {
//       console.log(this);
//     };
//     sam();
//   },
// };

// obj.fn();

// ------

// let obj = {
//   a: 10,
//   fn: () => {
//     console.log(this);
//     function sam() {
//       console.log(this);
//     }
//     sam();
//   },
// };
// obj.fn();

// -------------------------------

//4.  indirect calling
// .call() , .apply()

// let obj1 = {
//   a: 10,
//   fn: function (a, b, c) {
//     console.log(this.a, a, b, c);
//   },
// };

// // obj1.fn(100, 200, 300);

// // ----

// let obj2 = {
//   a: "sam",
// };
// // obj2.fn(); //error;

// obj1.fn();
// obj1.fn.call(obj2, 40, 50, 60); //indirect calling => change referece of this keyword

// -----------------------------

let obj1 = {
  a: "samarth",
  fn: function (d, e, f) {
    console.log(`hello from ${this.a} `, d, e, f);
  },
};

let obj2 = {
  a: "paras",
};

// obj1.fn(10, 20, 30);
// obj1.fn.call(obj2, 40, 50, 60);
// obj1.fn.apply(obj2, 10, 20, 40); //error
// obj1.fn.apply(obj2, [10, 20, 40]); //array is must

//both are used to change the referece of this keyword

// ---------------
// .bind() => change the reference of this
//=> run ❌ , it makes a new copy of thaat funtion

let obj3 = {
  fn: function () {
    console.log(this);
  },
};

// let bindedFuc = obj3.fn.bind(obj2);

// let bindedFuc = obj3.fn.bind(100);
let bindedFuc = obj3.fn.bind("sam");
// console.log(bindedFuc);

bindedFuc();
