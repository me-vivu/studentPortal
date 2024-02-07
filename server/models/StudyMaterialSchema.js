const mongoose = require('mongoose')

const StudyMaterialSchema=new mongoose.Schema({
    material_id:{type:String, required:true},
    user_id:{type:String, required:true},
    subject:{type:String, required:true},
    Branch:{type:String, required:true},
    Semester:{type:String, required:true},
    title :{type:String ,required:true},
    file_url :{data: Buffer, contentType: String}, 
    upload_date : { type : Date, default: Date.now },
});

const StudyMaterial = mongoose.model('studyMaterial', StudyMaterialSchema);


module.exports = StudyMaterial