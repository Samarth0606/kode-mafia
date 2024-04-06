// for 1-5

let n = 5;
// for (let i = 0; i <= n; i++) {
//   console.log(i);
// }

// let i = 1;
// while (i <= n) {
//   console.log(i);
//   i++;
// }

// ------------------

// array
let arr = [10, 20, 30, 40, 50];

for (let i of arr) {
  console.log(i);
}

let obj = {
  a: 100,
  b: 200,
  c: 300,
  d: 400,
};

for (let item in obj) {
  //   console.log(item); //keys
  console.log(obj[item]);
}
