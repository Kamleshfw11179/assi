const mongoose = require("mongoose")
const studentSchema = new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    address:{type:String,required:true},
    city:{type:String,required:true},
    education:{type:String,required:true},
    gender:{type:String,required:true},
    contact:{type:Number,required:true}  
})

const Student = mongoose.model("student",studentSchema)

module.exports = Student