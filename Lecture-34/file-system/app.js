let fs = require('fs');
// console.log(fs)

//create
// let data = "mai kuch padhkr nhi aaya, maaf krdo";
// fs.writeFile('sam.txt' , data , 
// {
//     encoding:'utf-8',
//     flag:'w'
// } , 
// (err)=>{
//     if(err){throw err}
//     console.log("data created sucessfully")
// }) 

// -----
// let data = "bhau bhau bhau";
// fs.writeFile('mav.txt' , data , 
// (err)=>{
//     if(err){throw err}
//     console.log("data created sucessfully")
// }) 

// ----------------------------

// read
// fs.readFile('sam.txt' , {
//     encoding: 'utf-8' , 
//     flag:'r'
// } , 
// (err , data)=>{
//     if(err){throw err}
//     console.log(data)
// })

// -------
// fs.readFile('sam.txt' , 
// (err , data)=>{
//     if(err){throw err}
//     console.log(data.toString())
// })

// ----------------------------

// update
// fs.appendFile('mav.txt' , " maalik mai bhauka" , 
// (err)=>{
//     if(err){throw err}
//     console.log("file updated successfully")
// }
// )

// delete
// fs.unlink('mav.txt' , (err)=>{
//     if(err){throw err}
//     console.log("file hatgao")
// })