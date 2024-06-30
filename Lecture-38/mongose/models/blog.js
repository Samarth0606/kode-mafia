const mongoose = require('mongoose');

// schema always accepts an object
let blogSchema = new mongoose.Schema({
    title: {
        type:String,
        trim:true,
        required:true
    },
    author: {
        type:String,
        trim:true,
        required:true
    },
    comment: {
        type:String,
        trim:true
    }
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
