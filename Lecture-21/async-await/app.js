// function helloPulkitBhaiya() {}

// console.log(helloPulkitBhaiya());

// --------

// function helloPulkitBhaiya() {}

// console.log(new helloPulkitBhaiya());

// --------

// async function helloPulkitBhaiya() {
//   return 10;
// }

// console.log(helloPulkitBhaiya());
// helloPulkitBhaiya().then(function (d) {
//   console.log(d);
// });

// -----------

// async function sam(a, b, c) {
//   console.log(10);
//   //   let ans = fetch("https://api.tvmaze.com/search/shows?q=girls");
//   let ans = await fetch("https://api.tvmaze.com/search/shows?q=girls");
//   console.log(20);
//   console.log(ans);
// }

// sam(10, 20, 30);

// ----------

// async function a() {
//   let out = await fetch("https://api.tvmaze.com/search/shows?q=girls");
//   console.log("start");
//   console.log(out);
//   console.log("end");
// }
// function b() {
//   console.log(10);
//   console.log(20);
// }

// a();
// b();

// -----------

// async function a() {
//   console.log("start");
//   console.log(out);
//   //   let out = await fetch("https://api.tvmaze.com/search/shows?q=girls");
//   console.log(out);
//   console.log("end");
// }
// function b() {
//   console.log(10);
//   console.log(20);
// }

// a();
// b();

// ---------
// async function a() {
//   console.log("start");
//   console.log(out);
//   let out = await fetch("https://api.tvmaze.com/search/shows?q=girls");
//   console.log(out);
//   console.log("end");
// }
// async function b() {
//   console.log(10);
//   console.log(20);
// }

// a();
// b();

// --------

// async function a() {
//   console.log("start");
//   let out = await fetch("https://api.tvmaze.com/search/shows?q=girls");
//   console.log(out);
//   console.log("end");
// }
// async function b() {
//   console.log(10);
//   await fetch("https://api.tvmaze.com/search/shows?q=girls");
//   console.log(20);
// }

// a();
// console.log(1000);
// b();
// console.log(2000);

// ------------

async function a() {
  console.log("start");
  let out = await fetch("https://api.tvmaze.com/search/shows?q=girls");
  console.log(out);
  console.log("end");
}
async function b() {
  console.log(10);
  fetch("https://api.tvmaze.com/search/shows?q=girls");
  console.log(20);
}

a();
console.log(1000);
b();
console.log(2000);
