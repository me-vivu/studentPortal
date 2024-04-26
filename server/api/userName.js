// Import necessary modules
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Signup = require('../models/signup'); 


router.post('/username', async (req, res) => {
    try {
        const { userId } = req.body;
        
        // Validate userId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Invalid userId' });
        }

        // Find user by ObjectId and select firstName and lastName
        const user = await Signup.findById(userId).select('firstName lastName');
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Construct and send the username
        const username = `${user.firstName} ${user.lastName}`;
        res.json({ userName: username });
    } catch (error) {
        console.error('Error fetching username:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
