const express = require('express');
const router = express.Router();
const Blog = require('../models/career'); 


router.post('/blogs', async (req, res) => {
  try {
    const { title, description, link } = req.body; // Extract data from request body

    // Create a new blog object
    const newBlog = new Blog({
      title,
      description,
      link
    });

    // Save the new blog post to the database
    await newBlog.save();

    res.status(201).json(newBlog); // Respond with the created blog post
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});


router.get('/blogs', async (req, res) => {
    try {
      // Fetch all blog posts from the database
      const blogs = await Blog.find();
  
      res.status(200).json(blogs); // Respond with the fetched blog posts
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
