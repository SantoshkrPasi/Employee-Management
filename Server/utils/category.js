import mongoose from "mongoose";

<<<<<<< HEAD
// mongoose.connect('mongodb+srv://ksant2064:sGC5edvImwosc2fm@cluster0.y48n8zi.mongodb.net/?retryWrites=true&w=majority')
//   .then(() => console.log('Connected!'));
// // Rest of your code...

const connectDB = async()=>{
  await mongoose.connect('mongodb+srv://ksant2064:sGC5edvImwosc2fm@cluster0.y48n8zi.mongodb.net/employeeDatabase')
  console.log("Category Connected")
}
// Rest of your code...

connectDB();

=======
mongoose.connect('mongodb+srv://xuosRbFEuKrrWka7:santosh123@cluster0.4nmvhdh.mongodb.net/createmydatabase')
  .then(() => console.log('Connected!'));
// Rest of your code...
// santosh@@14143
// createmydatabase
>>>>>>> 05d5ba4c7ddd66d157c60ff38b895ad2b9842a8d

const CategorySchema = new mongoose.Schema({
    category:{
        type:String,
        required:true
    },   
})

const category = mongoose.model("Category", CategorySchema);

export default category;