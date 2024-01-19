import mongoose from "mongoose";

mongoose.connect('mongodb+srv://xuosRbFEuKrrWka7:santosh123@cluster0.4nmvhdh.mongodb.net/createmydatabase')
  .then(() => console.log('Connected!'));
// Rest of your code...
// santosh123



const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
})

const collection = mongoose.model("employeeModel",newSchema)

export default collection;