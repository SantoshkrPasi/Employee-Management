import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/createmydatabase')
  .then(() => console.log('Connected!'));
// Rest of your code...



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

const collection = mongoose.model("employee",newSchema)

export default collection;