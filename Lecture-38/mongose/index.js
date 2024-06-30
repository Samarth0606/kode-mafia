const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// returns a promise
mongoose.connect('mongodb://127.0.0.1:27017/badmos')
.then(()=>{console.log('Server connected')})
.catch((err)=>{console.log('error' , err)})

app.set('views' , path.join(__dirname , 'views'))
app.set('view engine' , 'ejs')
app.use(express.static(path.join(__dirname , 'public')))
app.use(express.urlencoded({ extended: true })) //body parsing middleware


// app.get('/maipagalhojaunga' , (req,res)=>[
//     console.log(req)
// ])

// app.get('/sam/:kuchbhi' , (req,res)=>{
//     console.log(req.params);
//     res.send(req.params)
// } )
// app.get('/search' , (req,res)=>{
//     console.log(req.query)
//     res.send(req.query)
// })



//read
app.get('/blogs' , async(req,res)=>{
    let allBlogs = await Blog.find({});
    // res.render('index' , {allBlogs:allBlogs} )
    // res.send(allBlogs)
    res.render('index' , {allBlogs} )
})

// form
app.get('/blog/new' , (req,res)=>{
    res.render('new')
})

// actually add in ther DB
app.post('/blogs' , (req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

const PORT = 5050;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT : ${PORT}`)
})
