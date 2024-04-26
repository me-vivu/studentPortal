// routes/subjectsRoutes.js
const express = require('express');
const router = express.Router();
const Subject = require('../models/StudyMaterialSchema');

// GET subjects by branch and semester
router.get('/:branch/:semester', async (req, res) => {
try {
    const { branch, semester } = req.params;
    const subjects = await Subject.find({ branch, semester });
    res.json(subjects);
} catch (error) {
    console.error('Error fetching subjects:', error);
    res.status(500).json({ error: 'Internal server error' });
}
});

module.exports = router;
