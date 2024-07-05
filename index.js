const express = require('express');

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://kumarkartikay005:84y4hyuazdONyKfs@cluster0.wbvojwc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() =>{
    console.log("Db connected");
})
.catch((err) =>{
    console.log("Failed");
    console.log(err);
});


//ProductScheme
 const productSchema = new mongoose.Schema({
    product_name : {
        type : String,
        required : true
    },
    product_price : {
        type : String,
        required : true
    },
    isInStock : {
        type : Boolean,
        required : true
    },
    Category : {
        type : String,
        required : true
    }

 })


const app = express();

app.listen(8086, () =>{
    console.log("Server Started at 8086")
})