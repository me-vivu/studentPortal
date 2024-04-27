const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const SignupModel = require('./models/signup')
const StudyMaterialModel = require('./models/StudyMaterialSchema')
const ProjectModel = require('./models/ProjectSchema')
const CareerModel = require('./models/careerSchema')
const PostModel = require('./models/postSchema')
const Token = require('./models/token')


require("dotenv").config();

const PostRouter = require("./api/post");
const UserRouter = require("./api/userName");
const notes=require('./api/notes')
const projectRouter = require('./api/project');
const careerRouter = require('./api/career');

const verify = require('./utils')

const crypto = require("crypto");

const { google } = require('googleapis');
const Multer = require('multer');
const fs = require('fs');

require("dotenv").config();

const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect(process.env.MONGODB_URL)

app.use(notes);
app.use(projectRouter);
app.use(careerRouter);


app.get('/get-data/:branch/:semester', async (req, res) => {

    const{branch, semester} = req.params;
    
    try {
        // Query database based on selected branch and semester
        const data = await StudyMaterialModel.find({ branch, semester });
        console.log(data)
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

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

app.post('/studyMaterial',  (req, res)=>{

    StudyMaterialModel.create(req.body)
    .then(studyMaterial=> res.json(studyMaterial))
    .catch(err => res.status(400).send(err));
    
})

app.post('/careers',  (req, res)=>{

    CareerModel.create(req.body)
    .then(careers=> res.json(careers))
    .catch(err => res.status(400).send(err));
    
})

app.post('/project',  (req, res)=>{

    ProjectModel.create(req.body)
    .then(projects=> res.json(projects))
    .catch(err => res.status(400).send(err));
    
})



app.use(PostRouter);
app.use(UserRouter);

const multer = Multer({
    storage: Multer.diskStorage({
    destination: function (req, file, callback) {
        
        let destinationFolder;
        
        if (req.folder) {
            console.log(req.folder)
            destinationFolder = req.folder; // Get destination folder from request body
        } else {
            destinationFolder = ''; // Default folder if not specified in request
        }
        callback(null, `${__dirname}/${destinationFolder}`);
      },
      filename: function (req, file, callback) {
        callback(null, file.fieldname + "" + Date.now() + "" + file.originalname);
      },
    }),
    limits: {
      fileSize: 5 * 1024 * 1024, // 5 MB
    },
});
  
const authenticateGoogle = () => {
    const auth = new google.auth.GoogleAuth({
        keyFile: './service-account.json',
        scopes: "https://www.googleapis.com/auth/drive",
    });
    return auth;
};

  
const uploadToGoogleDrive = async (file, auth) => {
    const fileMetadata = {
        name: file.originalname,
        parents: ["1qNOgx-TVbgIVVEkW7Qe3Aqz4kt44kcZ_"], 
};
  
const media = {
    mimeType: file.mimetype,
    body: fs.createReadStream(file.path),
};

const driveService = google.drive({ version: "v3", auth });
  
const response = await driveService.files.create({
        requestBody: fileMetadata,
        media: media,
        fields: "id",
    });
    return response.data.id;
};
  
const deleteFile = (filePath) => {
    fs.unlink(filePath, (err) => {
        if (err) {
        console.error("Error deleting file:", err);
        } else {
        console.log("File deleted");
        }
    });
};
  
app.post("/uploadData", multer.single("file"), async (req, res, next) => {
    try {

        
        if (!req.file) {
            res.status(400).send("No file uploaded.");
            return;
        }

        const auth = authenticateGoogle();
        const fileId = await uploadToGoogleDrive(req.file, auth);
        deleteFile(req.file.path);
        res.status(200).json({ fileId });

    } catch (err) {
        console.error("Error uploading file:", err);
        res.status(500).send("Internal server error");
    }
});


app.listen(5001, ()=>{
    console.log("Server is running on port 5001")
})