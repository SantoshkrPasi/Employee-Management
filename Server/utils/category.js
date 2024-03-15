import mongoose from "mongoose";

// mongoose.connect('mongodb+srv://ksant2064:sGC5edvImwosc2fm@cluster0.y48n8zi.mongodb.net/?retryWrites=true&w=majority')
//   .then(() => console.log('Connected!'));
// // Rest of your code...

const connectDB = async()=>{
  await mongoose.connect('mongodb+srv://ksant2064:sGC5edvImwosc2fm@cluster0.y48n8zi.mongodb.net/employeeDatabase')
  console.log("Category Connected")
}
// Rest of your code...

connectDB();


const CategorySchema = new mongoose.Schema({
    category:{
        type:String,
        required:true
    },   
})

const category = mongoose.model("Category", CategorySchema);

export default category;