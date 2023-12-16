import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/createmydatabase')
  .then(() => console.log('Connected!'));
// Rest of your code...



const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("kamli",newSchema)

export default collection;