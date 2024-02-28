import mongoose from "mongoose";


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