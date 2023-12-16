import express from "express"
import  Collection  from "./utils/userModel.js"
import  cors  from 'cors'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(cors())
// ---------

// Allow requests from 'http://localhost:5173'
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

// ---------

app.get("/login",(req,res)=>{

    res.json({data:"this is the data"})
})
app.post("/login",async(req,res)=>{
    const{email,password}=req.body;
    try{
        const check=await Collection.findOne({email:email})

        if(check){
            res.status(200).json({})
        }
        else{
            res.status(401).json({})
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{

    try {

        const{email,password}=req.body;
        
        const data={
            email:email,
            password:password
        }
        
        const check = await Collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            await Collection.insertMany([data])
            res.json("notexist");
        }

    }
    catch(e){
        console.log(e)
        res.status(500).json("errot in the server")
    }

})

app.listen(4000,()=>{
    console.log("port connected");
})
