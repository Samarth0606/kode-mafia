const express = require('express');
const app = express();
const zod = require('zod');

app.use(express.json()); //json



// zod schema
let mySchema = zod.array(zod.number());


app.post('/random' , (req,res)=>{
    let worldcups = req.body.worldcup;
    // parse data
    let response = mySchema.safeParse(worldcups);
    if(!response.success){
        return res.status(411).send(response.error.issues[0].message)
    }else{
        res.send(response.data);
    }
})

// schema
let schema2 = zod.object({
    email:zod.string().email(),
    password:zod.string().min(6),
    country: zod.literal("IN").or(zod.literal("US"))
})

app.post('/signup' , (req,res)=>{
    let users = req.body.user;
    let response = schema2.safeParse(users);
    if(!response.success){
        return res.status(411).send(response.error.issues[0].message)
    }else{
        res.send(response.data);
    }
})



app.listen(8080 , ()=>{
    console.log('server connected at port 8080')
} )