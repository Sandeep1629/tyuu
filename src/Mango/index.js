const express=require("express");
const mongoose=require("mongoose");
const StudentModel=require("./models/Student");
const app=express();
app.use(express.json());
mongoose.connect("mongodb+srv://2100032245:2100032245@cluster0.iejagan.mongodb.net/?retryWrites=true&w=majority",
{useNewUrlParser: true, },()=>console.log("Connected to DB"));
//app.get('/gets',(req,res)=>res.json(StudData.find()))
app.post("/newstud",async(req,res)=>{
    const custname=req.body.custname;
    const custsend=req.body.custsend;
    const custprop=req.body.custprop;
    const custAmm=req.body.custAmm;
    const custcAmm=req.body.custcAmm;
    const custcar=req.body.custcar;
    const student=new StudentModel({sname:custname,rname:custsend,prop:custprop,sac:custAmm,rac:custcar,csac:custcAmm});
    try{
    await student.save();
    res.send("Inserted Values");}
catch(err){
    console.log(err);
}});
app.get("/display",async(req,res)=>{
    StudentModel.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.json(result);
    });
});
    app.listen(process.env.port || 3001,()=>console.log("Server Ready."))