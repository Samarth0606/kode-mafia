// let inpEl = document.querySelector('input');
// let spanEl = document.querySelector('span');

// let callApi = (e)=>{
//     console.log('api called ' , e.target.value)
// }

// inpEl.addEventListener('input' , callApi)

// ----------------------------------------
// part-2

let inpEl = document.querySelector('input');
let spanEl = document.querySelector('span');

let callApi = (e)=>{
    console.log('api called ' , e.target.value)
}

inpEl.addEventListener('input' , throttling(callApi , 1000))
// inpEl.addEventListener('input' , callApi)

// throttling -> 2args , return fn
// let throttling = (fn , wait=2000)=>{
function throttling(fn , wait=2000){
    let idd = null;
    return (e)=>{
        clearTimeout(idd)
        idd = setTimeout(()=>{
            fn(e)
        } , wait)
    }
}

let updateNumber = throttling(()=>{
    spanEl.innerText  = ++spanEl.innerText;
} , 1000)

document.addEventListener('mousemove' , updateNumber)


// (()=>{})() //iife , event delegation , currying fn