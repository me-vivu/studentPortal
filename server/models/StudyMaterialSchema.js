const mongoose = require('mongoose')

const StudyMaterialSchema=new mongoose.Schema({
    material_id:{type:String, required:true},
    user_id:{type:String, required:true},
    subject:{type:String, required:true},
    branch:{type:String, required:true},
    semester:{type:String, required:true},
    title :{type:String ,required:true},
    file_url :{type: String, required: true}, 
    upload_date : { type : Date, default: Date.now },
});

const StudyMaterial = mongoose.model('studyMaterial', StudyMaterialSchema);

module.exports = StudyMaterial