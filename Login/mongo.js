const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/dforum-login").then(()=>{
    console.log("Login mongoDb connected")
}).catch(()=>{
    console.log("Login mongoDb connection failed")
})


const  newSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports = collection;