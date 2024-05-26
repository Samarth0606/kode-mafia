


// const req = new XMLHttpRequest()

// // console.log(req)


// req.open('GET' , 'https://api.tvmaze.com/search/shows?q=batman');
// req.send()

// // console.log(req);

// req.onerror = function(res){
//     console.log(this.response , "error")
// }
// req.onload = function(res){
//     console.log(this.response , "load")
// }


// ---------------------------------------



// fetch -> webapi -> returns a promise

// let res = fetch('https://api.tvmaze.com/search/shows?q=batman')
// res.then((function(data){
//     console.log(data)
//     console.log(data.json()) 
// }))
// // console.log(res)


// -------------------------------------
// fetch


// let res = fetch('https://api.tvmaze.com/search/shows?q=batman') //returns a promise
// .then(function(data){
//     return data.json() //return a promsie
// })
// .then(function(finalData){
//     console.log(finalData)
// })
// .catch(function(err){
//     console.log("error agya" , err)
// })



// -------------------------------------

// axios

let req = axios.get('https://api.tvmaze.com/search/shows?q=batman') //promise
.then(function(res){
    console.log(res.data)
})
.catch(function(err){
console.log(err)
})

