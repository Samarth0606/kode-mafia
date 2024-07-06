const express = require('express') //fn
const app = express() //instances
const mongoose = require('mongoose');
const path = require('path');
const Sport = require('./models/Sport');
const methodOverride = require('method-override')


//return promise
mongoose.connect('mongodb://127.0.0.1:27017/mysports')
.then(()=>{console.log("SERVER CONNECTED")})
.catch((err)=>{console.log("ERROR" , err)})

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views')); //template
app.use(express.static(path.join(__dirname ,'public'))); // static files
// app.use(express.json()) // json
app.use(express.urlencoded({ extended: true }))  //body parsing middleware -> formdata
app.use(methodOverride('_method'))

// read
app.get('/sports' , async(req,res)=>{
    let allSports = await Sport.find({});
    // res.send(allSports)
    res.render('index' , {sports:allSports} )
})

// form
app.get('/sport/new' , (req,res)=>{
    res.render('new')
})

// actually adding in the db
app.post('/sports' ,async(req,res)=>{
   let {sport , year , isPlayed} = req.body;
   let newSport = await Sport.create({sport , year , isPlayed});
   res.redirect('/sports')
})

// show  a particular product
app.get('/sports/:idd'  , async(req,res)=>{
    let {idd} =  req.params;
    let foundSport = await Sport.findById(idd);
    res.render('show' , {foundSport})
})

//form for editing
app.get('/sports/:idd/edit' , async(req,res)=>{
    let {idd} =  req.params;
    let foundSport = await Sport.findById(idd);
    res.render('edit' , {foundSport})
})

// actually editing
app.patch('/sports/:id' , async(req,res)=>{
    let {id} =  req.params;
    let {sport , year} = req.body;
    await Sport.findByIdAndUpdate(id , {sport , year});
    res.redirect('/sports')
})

// deleting
app.delete('/sports/:id' , async(req,res)=>{
    let {id} =  req.params;
    await Sport.findByIdAndDelete(id);
    res.redirect('/sports')
})



const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`Server connectd at port ${PORT}`)
})