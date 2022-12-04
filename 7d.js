const express=require('express')
const mongoose=require('mongoose')
const url="mongodb+srv://mydb:db123@cluster0.j4wvezh.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url).then(()=>console.log("Database Connected.... ")).catch(err=>console.log(err));

var bookSchema = mongoose.Schema({
    name: String,
    isbn: {type: String, index: true},
    author: String,
    pages: Number
});

var Book = mongoose.model("Book", bookSchema);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error!"));
db.once("open", function(){
    console.log("Connected to DB");
});
