//array methods
// let arr = [10, 20, 30, 40, 50];

//1. forEach() => arr.forEach() => accepts a cb func => 2 (item , index)
//=> it doesnot return anything
// let ans = arr.forEach(function (item, index) {
//   console.log(item, index);
// });

// console.log(ans);

// -------------------------
//2. map() => arr.map() => accepts a cb func => 2 (item , index)
//=> it returns  new array (with the same length as initial array)

// let arr = [10, 20, 30, 40, 50];

// let newArray = arr.map(function (item, index) {
//   return item + item;
// });
// console.log(arr);
// console.log(newArray);

// -------------------------
//3. filter() => arr.filter() => accepts a cb func => 2 (item , index)
//=> it returns  new array (with no le ngth restriction)
//=> truethy value ko hi return krega in new array

// let arr = [10, 20, 30, 40, 50];

// let newFilteredArray = arr.filter(function (item, index) {
//   if (item > 20) {
//     return true;
//   }
// });

// console.log(arr);
// console.log(newFilteredArray);

// --------------------------
// 4. find()

let arr = [10, 20, 30, 40, 30, 50];

let retItem = arr.find(function (item, index) {
  if (item === 30) {
    return item;
  }
});

console.log(retItem);
