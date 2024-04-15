// function outer() {
//   let a = 10;
//   function innner() {
//     console.log("mai hu gian");
//     console.log(a);
//   }
//   innner();
// }

// outer();

// --------------------

//hof
// function outer() {
//   let a = 10;
//   function innner() {
//     console.log("mai hu gian");
//     console.log(a);
//   }
//   return innner;
// }

// let d = outer();
// d();

// ---------

// function outer() {
//   let a = 10;
//   let b = 20;
//   function innner() {
//     console.log("mai hu gian");
//     console.log(a);
//   }
//   return innner;
// }

// let d = outer();
// d();

// ---------

// let a = 10;
// function outer() {
//   let b = 10;
//   function innner() {
//     console.log("mai hu gian");
//     console.log(a);
//     console.log(b);
//   }
//   return innner;
// }
// let d = outer();
// d();

// -------------------

// use of closure -> privatisation of methods

function counter() {
  let count = 0;
  return {
    getCount: function () {
      console.log(count);
    },
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    reset: function () {
      count = 0;
    },
  };
}
let out = counter();
console.log(out);
out.getCount();
out.increment();
out.increment();
out.increment();
out.getCount();
out.decrement();
out.getCount();
out.reset();
out.getCount();
// console.log(count); //error
