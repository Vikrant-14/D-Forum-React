const express = require("express");
const router = express.Router();


const userDB = require("../models/user");
const user = require("../models/user");

router.post("/signup", async (req, res) => {
    try {
        await userDB.create(req.body).then(() => {
            res.status(200).json({
                status: 200,
                message: "Signup Successfull"
            })
        }).catch((e) => {
            res.status(400).send({
                status: false,
                message : "Bad request"
            })
        })
    }catch(e){
        res.status(500).send({
            status : false,
            message : "Error while adding answer"
        })
    }
})

router.post("/signin", async (req, res) => {
    const {email, password} = req.body;
   userDB.findOne({email: email}).then((user) => {
if(user._id ) {
    if(user.password == password) {
       
        return res.status(200).json({
           user
           })
    }  else {
        return res.status(401).json({
            error: "Passowrd did not match"
        })
    }
   
}
    
   }).catch(e => res.status(400).json({
    error: "Invalid Email or Password"
   }))
})

module.exports = router;