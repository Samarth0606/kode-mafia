// function checkNumber(arr) {
//   let result = [];
//   for (let item of arr) {
//     if (typeof item === "number") {
//       result.push(item);
//     }
//   }
//   return result;
// }

// function checkString() {
//   let result = [];
//   for (let item of arr) {
//     if (typeof item === "string") {
//       result.push(item);
//     }
//   }
//   return result;
// }

// function checkBoolean() {
//   let result = [];
//   for (let item of arr) {
//     if (typeof item === "boolean") {
//       result.push(item);
//     }
//   }
//   return result;
// }

// let arr = [10, "sam", "vohra", true, 30, 40, false, "lol"];
// console.log(checkNumber(arr));
// console.log(checkString(arr));
// console.log(checkBoolean(arr));

// ------------------------------------------------------

function checkBoolean(item) {
  return typeof item === "boolean";
}
function checkNumber(item) {
  return typeof item === "number";
}
function checkString(item) {
  return typeof item === "string";
}
function check(arr, fn) {
  let result = [];
  for (let item of arr) {
    if (fn(item)) {
      result.push(item);
    }
  }
  return result;
}
let arr = [10, "sam", "vohra", true, 30, 40, false, "lol"];
console.log(check(arr, checkString));
console.log(check(arr, checkNumber));
console.log(check(arr, checkBoolean));
