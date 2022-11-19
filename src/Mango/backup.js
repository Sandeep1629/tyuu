const express=require('express');
const mongoose=require('mongoose');
const Product=require("./models/Product");
require('dotenv/config');
const app=express();
app.use(express.json);
mongoose.connect(process.env.URL,()=>console.log("connected to DB"));
app.get("/",(req,res)=>res.send("Hello"));
app.post("/newp",(req,res)=>{
    const prd=new Product({
        name:req.body.name,
        description:req.body.description
    }
    );
    prd.save()
    .then(data=>{res.json(data);})
    .catch(err=>{res.json({message:err});});

});
app.listen(3001,()=>console.log('Server Started'))