const mongoose=require("mongoose");
const StudentSchema=mongoose.Schema({
    sname:{
        type:String,
        required:true},
        rname:{
            type:String,
            required:true},
            prop:{
                type:String,
                required:true},
        
        sac:{
            type:Number,
            required:true
        },
        rac:{
            type:Number,
            required:true
        },
        csac:{
            type:Number,
            required:true
        }


});
const Student=mongoose.model("StudData",StudentSchema);
module.exports=Student;