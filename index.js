const express = require('express');
const app = express();
require('dotenv').config();

const productRoutes = require('./routes/productRoutes')

app.use(express.json());

const mongoose = require('mongoose');
const { Route } = require('react-router-dom');

mongoose.connect(process.env.MONGO_URL)
.then(() =>{
    console.log("Db connected");
})
.catch((err) =>{
    console.log("Failed");
    console.log(err);
});

app.use('/api/products',productRoutes);


app.listen(8086, () =>{
    console.log("Server Started at 8086")
})