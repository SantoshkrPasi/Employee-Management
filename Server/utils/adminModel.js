import mongoose from "mongoose";

mongoose.connect('mongodb+srv://xuosRbFEuKrrWka7:santosh123@cluster0.4nmvhdh.mongodb.net/createmydatabase')
  .then(() => console.log('MongoDB Connected!'));
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
    address:{
        type:String,
        required:true
    },
  
})

const model = mongoose.model("admindatabase",newSchema)

export default model;