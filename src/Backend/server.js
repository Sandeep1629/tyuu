const express=require ("express");
const BrandName=require("./model");
const { default: mongoose } = require("mongoose");
const app=express();
app.use(express.json())
mongoose.connect("mongodb+srv://2100032245:2100032245@cluster0.iejagan.mongodb.net/?retryWrites=true&w=majority").then(()=>
console.log("DB connected")).catch(err=>console.log(err))
app.post('/addbrands',async(req,res)=>
{
    const {brandname}=req.body;
    try{
        const newData= new BrandName({brandname})
        newData.save();
        return res.json(await BrandName.find())
    }
catch(err)
{
    console.log(err.message);
}
})
app.get("/getallbrands",async(req,res)=>{
    try{
const allData=await BrandName.find();
return res.json(allData);
    }
    catch(err)
    {
        console.log(err.message);

    }
})
app.get("/getallbrands/:id",async(req,res)=>{
    try{
const Data=await BrandName.findById(req.params.id);
return res.json(Data);
    }
    catch(err)
    {
        console.log(err.message);

    }
})
app.delete("/deletebrand/:id",async(req,res)=>
{
    try{
   await BrandName.findByIdAndDelete(req.params.id);
   return res.json(await BrandName.find())

    }
    catch(err)
    {
        console.log(err.message);
    }
})


 app.listen(3000,()=>console.log("server is runnig"))