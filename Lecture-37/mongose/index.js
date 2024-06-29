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


app.get('/blogs' , async(req,res)=>{
    let allBlogs = await Blog.find({});
    res.send(allBlogs)
})


const PORT = 5050;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT : ${PORT}`)
})
