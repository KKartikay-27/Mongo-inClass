const express = require('express');
const app = express();

app.use(express.json());

const mongoose = require('mongoose');
const { Route } = require('react-router-dom');

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

 });

const productModel = mongoose.model('products', productSchema);


//Create

app.post('/api/products', (req,res) => {
    
    const product = productModel.create({
        product_name : req.body.product_name,
        product_price : req.body.product_price,
        isInStock : req.body.isInStock,
        Category : req.body.Category
    })
    
    console.log(product)
    
    return res.status(201).json({message: "Product Created"});
})


app.listen(8086, () =>{
    console.log("Server Started at 8086")
})

//get route

//find all entries with isinstock = true
app.get('/api/products',async(req,res) =>{
    const allProducts = await productModel.find({isInStock: true});

    return res.json(allProducts);
})


//find all entries with a specific id
app.get('/api/products/:id',async(req,res) =>{
    const product = await productModel.findById(req.params.id);

    return res.json(product);
})