//older way -> not that efficient
// let arr1 = [10,20,30,40];
// let arr2 = [50,60,70]
// let ans = arr1.concat(arr2);
// console.log(ans)

// -----------------------
// newer -> spread operator -> ... -> objects , array
// [10,20,30,40] => 10  20  30  40
// {l , m , n} => l  m  n

// let arr1 = [10,20,30,40];
// let arr2 = [50,60,70]
// // let ans = [...arr1 , 50 , 60 , 70]
// let ans = [...arr1 , ...arr2] //spread an array
// console.log(ans)

// --------

// let obj1 = {
//     a:10,
//     b:20,
//     c:30
// }
// let obj2 = {
//     ...obj1, //spreading object
//     d:40
// }
// console.log(obj2)

// ------------

// rest parameter
// function sam(a , b , c , ...num){
//     console.log(arguments);
//     console.log(num);
//     // console.log(a , b , c);
// }
// sam(10,20,30,40,50,60)

// -------------

// function sam(...num , a ,b , c ){ //error
//     console.log(arguments);
//     console.log(num);
//     console.log(a , b , c);
// }
// sam(10,20,30,40,50,60)

// -------------------

// let fruits = ["papaya","apple" , "mango"  , "orange"];
// older way
// console.log(fruits[0])
// console.log(fruits[2])

// destructure array
// let [ab , b , c , d] = fruits
// console.log(ab , b , c ,d)

// let [ab , b , c , d , e] = fruits
// console.log(ab , b , c ,d , e) //undef


// let [ab , b , c ] = fruits
// console.log(ab , b , c ) 

// -----

// let [ab , b , c , d , e="grapes" ] = fruits
// console.log(ab , b , c , d , e ) 
// ----
// let [ab , b , e="grapes" ] = fruits //override
// console.log(ab , b , e ) //mango



// ---------------------------



// destructure objects

let car = {
    name: "bm-babloo",
    price: 150,
    wheel:2
}
// older way
// console.log(car.name)
// console.log(car.price)

// destructure obj => same name of key

// let {name , price } = car;
// console.log(name)
// console.log(price)

// -----

// let {name:naamwa , price } = car;
// console.log(name) //cant access
// console.log(naamwa)
// console.log(price)

// ------------------------


let {name:naamwa , price , wheel="4"} = car;
console.log(wheel) //2 override
console.log(naamwa)
console.log(price)






