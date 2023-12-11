const express = require("express")
const collection = require('./mongo')
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended : true}))
app.use(cors())

//login
app.get("/", cors(),(req , res)=>{

})


app.post("/",async(req,res)=>{
    const{email, password} = req.body
    try{
        const check = await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("not exist")
        }

    }catch(e){
            res.json("notexist")
    }
})

//signup

app.post("/signup",async(req,res)=>{
    const{email, password} = req.body

    const data = {
        email:email,
        password:password
    }

    try{
        const check = await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("not exist")
            await collection.insertMany([data])
        }

    }catch(e){
            res.json("notexist")
    }
})

app.listen(4500, ()=>{
    console.log("server is running on port 4500")
})