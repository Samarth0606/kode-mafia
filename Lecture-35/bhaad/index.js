const express = require('express')
const app = express();

let pass = "sam"

app.use('/admin', (req,res,next)=>{
    console.log("hey")
    if(pass === "sam"){
        // next()
        // res.send("lolipop")
    }
    else{
        return res.send("wrong pass")
    }
})

app.get( '/admin/sam' , (req,res)=>{
    console.log("admin chal gya");
    res.send('<h1>hello from admin</h1>')
    // console.log(res)
} )

app.get( '/sam' , (req,res)=>{
    console.log("sam chal gya");
    res.send('<h1>hello from sam</h1>')
    // console.log(req)
} )


app.listen(8080 , ()=>{
    console.log(`Server connected at port 8080`)
})