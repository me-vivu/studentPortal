const express = require('express');
const router = express.Router();
const Post = require('../models/postSchema');


router.post('/posts', async (req, res) => {

    console.log(req.body);
    
    try {

        const { post_id, user_id, caption, file } = req.body;
        
        const newPost = new Post({
            post_id,
            user_id,
            caption,
            file
        });


        const savedPost = await newPost.save();
        res.status(201).json(savedPost);


    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
