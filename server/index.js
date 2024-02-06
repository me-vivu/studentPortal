const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const SignupModel = require('./models/signup')
const Token = require('./models/token')
const crypto = require("crypto")
const verify = require('./utils')
require("dotenv").config();


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL)

app.post('/register',  (req, res)=>{

    const {firstName, emailId, password} = req.body;
    SignupModel.findOne({emailId: emailId})
    .then(async user =>{
        if(!user){
            SignupModel.create(req.body)
            .then(signups => res.json(signups))
            .catch(err=> res.json(err))

            const token = new Token({
                userId: emailId,
                token: parseInt(Math.random()*8999 + 1000, 10)
            })

            process.env.AUTH_OTP = token.token;

            await token.save();

            verify(firstName, emailId, token.token);

            console.log(token);

        }else{
            res.json("User Already exist!")
        }
    })

})

app.post('/verify', (req, res) =>{
    const{otp} = req.body;
    console.log(process.env.AUTH_OTP)
    
    if(otp == process.env.AUTH_OTP){
        res.json("success");
    }else{
        res.json("tryAgain");
    }
    
})



app.post("/login" , (req, res) =>{

    const {emailId, password} = req.body;
    
    SignupModel.findOne({emailId: emailId})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json("Password is Incorrect")
            }
        }else{
            res.json("User Not Found")
        }
    })

})


app.listen(3001, ()=>{
    console.log("Server is running on port 3001")
})