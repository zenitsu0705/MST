const express=require('express')
const mongoose=require('mongoose')
const app=express()
app.listen(3000,()=>console.log("server running....."))
const url="mongodb+srv://mydb:db123@cluster0.j4wvezh.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url).then(()=>console.log("Database Connected....")).catch(err=>console.log(err));

var bookSchema = mongoose.Schema({
    name: String,
    isbn: {type: String, index: true},
    author: String,
    pages: Number
});