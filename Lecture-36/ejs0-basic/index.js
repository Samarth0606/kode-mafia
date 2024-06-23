const express = require('express');
const app = express();
const path = require('path')


app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'))
app.use(express.static(path.join(__dirname, 'public')));

// console.log(process.cwd() + '/views')
// middleware
console.log(__dirname + '/views')

app.use('/admin' , (req,res,next)=>{
    console.log("mai middleware hu admin ka");
    next();
})

app.get('/admin' , (req,res)=>{
    // res.status(404).render('admin')
    res.render('adminFolder/admin')
})

app.get('/admin/sam' , (req,res)=>{
    res.send("<h1>hello sam admin </h1>")
})

app.get('*' , (req,res)=>{
    res.send("404 not found")
})




let PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`Server connected at port: ${PORT}`)
})