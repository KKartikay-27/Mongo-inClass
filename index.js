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

const app = express();

app.listen(8086, () =>{
    console.log("Server Started at 8086")
})