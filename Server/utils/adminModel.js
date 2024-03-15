import mongoose from "mongoose";

<<<<<<< HEAD
=======
mongoose.connect('mongodb+srv://xuosRbFEuKrrWka7:santosh123@cluster0.4nmvhdh.mongodb.net/createmydatabase')
  .then(() => console.log('MongoDB Connected!'));
// Rest of your code...
>>>>>>> 05d5ba4c7ddd66d157c60ff38b895ad2b9842a8d

const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://ksant2064:sGC5edvImwosc2fm@cluster0.y48n8zi.mongodb.net/employeeDatabase')
    console.log("Admin Connected")
}

connectDB();

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
    image : {
        type:String,
        required:true
    }
  
})

const model = mongoose.model("admindatabase",newSchema)

export default model;