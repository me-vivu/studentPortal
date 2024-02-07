const mongoose = require('mongoose')

const ProjectSchema=new mongoose.Schema({
    project_id:{type:String, required:true},
    user_id:{type:String, required:true},
    title :{type:String ,required:true},
    description:{type :String, required:true},
    file :{data: Buffer, contentType: String}, 
    upload_date : { type : Date, default: Date.now }
});

const Project = mongoose.model('projects', ProjectSchema);


module.exports = Project