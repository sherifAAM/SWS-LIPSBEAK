const express = require('express');
const User = require('../models/user');

const router = express.Router();

// Update user progress
router.put('/:id/progress', async (req, res) => {
    const { id } = req.params;
    const { lessonsCompleted, testsPassed, progress, currentLevel } = req.body;

    try {
        const user = await User.findByIdAndUpdate(
            id,
            { lessonsCompleted, testsPassed, progress, currentLevel },
            { new: true }
        );

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error updating progress." });
    }
});

module.exports = router;