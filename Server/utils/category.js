import mongoose from "mongoose";

mongoose.connect('mongodb+srv://xuosRbFEuKrrWka7:santosh123@cluster0.4nmvhdh.mongodb.net/createmydatabase')
  .then(() => console.log('Connected!'));
// Rest of your code...
// santosh@@14143
// createmydatabase

const CategorySchema = new mongoose.Schema({
    category:{
        type:String,
        required:true
    },   
})

const category = mongoose.model("Category", CategorySchema);

export default category;