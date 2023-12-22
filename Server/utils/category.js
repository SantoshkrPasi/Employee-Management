import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/createmydatabase')
  .then(() => console.log('Connected!'));
// Rest of your code...



const CategorySchema = new mongoose.Schema({
    category:{
        type:String,
        required:true
    },   
})

const category = mongoose.model("Category", CategorySchema);

export default category;