const mongoose = require('mongoose')

const careerSchema=new mongoose.Schema({
    career_id:{type:String, required:true},
    user_id:{type:String, required:true},
    title :{type:String ,required:true},
    description:{type :String, required:true},
    file :{data: Buffer, contentType: String},  //field to store the
    publish_date : { type : Date, default: Date.now },
    author_name:{type:String , required:true},
});

const Career = mongoose.model('careers', careerSchema);


module.exports = Career