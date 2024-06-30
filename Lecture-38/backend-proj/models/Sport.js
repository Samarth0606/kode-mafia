const mongoose = require('mongoose');

//schema
let sportSchema = new mongoose.Schema({
    sport:{
        type:String,
        trim:true,
        required:true
    },
    year:{
        type:Number,
        required:true,
        min:0,
    },
    isPlayed: {
        type:Boolean,
        required:true
    }
});

//model

const Sport = mongoose.model('Sport' , sportSchema);
module.exports = Sport;