// let p1 = new Promise()
// let p1 = new Promise(function(resolve , reject){})

// ------------------

// let p1 = new Promise(function (resolve, reject) {
//   let data = "hi i am resolved data";
//   let data2 = "hi i am rejected data";
//   // resolve(data);
//   reject(data2);
// });

// // console.log(p1);

// // p1.then().catch()

// p1.then(function (d) {
//   console.log(d);
// }).catch(function (err) {
//   console.log(err);
// });

// ---------------

// let p1 = new Promise(function (resolve, reject) {
//   let data = "hi i am resolved data";
//   let data2 = "hi i am rejected data";
//   resolve(data);
//   reject(data2);
// });

// p1.then(function (d) {
//   console.log(d);
// }).catch(function (err) {
//   console.log(err);
// });

// ------------

// let p1 = new Promise(function (resolve, reject) {
//   let data = "hi i am resolved data";
//   let data2 = "hi i am rejected data";
//   resolve(data);
//   reject(data2);
// });

// p1.catch(function (d) {
//   console.log(d, "d");
// }).then(function (err) {
//   console.log(err, "err");
// });

// ----------------

let p1 = new Promise(function (resolve, reject) {
  let data = "hi i am resolved data";
  let data2 = "hi i am rejected data";
  console.log("pehle");
  resolve(data);
  reject(data2);
  console.log("baadme");
});

p1.then(function (d) {
  console.log(d);
}).catch(function (err) {
  console.log(err);
});
