const mongoose = require('mongoose')

const SignupSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    emailId: String, 
    password: String,
    verified:{type:Boolean, default: false}

})

const SignupModel = mongoose.model('signups', SignupSchema)


module.exports = SignupModel