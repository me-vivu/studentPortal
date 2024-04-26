const express = require('express');
const router = express.Router();
const Project = require('../models/ProjectSchema');


router.post('/projects', async (req, res) => {

    console.log(req.body);
    
    try {

        const { project_id, user_id, title, description, domain, file, upload_date } = req.body;
        
        const newProject = new Project({
            project_id,
            user_id,
            title,
            description, 
            domain, 
            file,
            upload_date
            
        });


        const savedProject = await newProject.save();
        res.status(201).json(savedProject);


    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
