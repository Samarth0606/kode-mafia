// part-1
// let inpEl = document.querySelector('input');


// let callApi = function(e){
//     console.log("API called" , e.target.value)
// }


// inpEl.addEventListener('input' , callApi)

// // --------------------/
// // part-2
// let inpEl = document.querySelector('input');


// let callApi = function(e){
//     console.log("API called" , e.target.value)
// }

// // debounce => 2 args , return fn
// let debounce = function(fn , wait){
//     return ()=>{

//     }
// }

// inpEl.addEventListener('input' , callApi)


// // --------------------/
// // part-3
// let inpEl = document.querySelector('input');


// let callApi = function(e){
//     console.log("API called" , e.target.value)
// }

// // debounce => 2 args , return fn
// let debounce = function(fn , wait){
//     return (e)=>{
//         console.log(e)
//         fn(e)
//     }
// }

// let debouncedValue = debounce(callApi , 2000);

// console.log(debouncedValue) //arrow fn

// inpEl.addEventListener('input' , debouncedValue)


// --------------------/
// part-4
let inpEl = document.querySelector('input');


let callApi = function(e){
    console.log("API called" , e.target.value)
}

// debounce => 2 args , return fn
let debounce = function(fn , wait){
    let idd = null;
    return (e)=>{
        clearTimeout(idd)
        idd = setTimeout(()=>{
            fn(e)
        } , wait)
    }
}

let debouncedValue = debounce(callApi , 2000);

// console.log(debouncedValue) //arrow fn

inpEl.addEventListener('input' , debouncedValue)
