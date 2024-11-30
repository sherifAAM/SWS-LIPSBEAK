const express = require('express');
const Lesson = require('../models/lesson');

const router = express.Router();

// Get lessons by level
router.get('/:level', async (req, res) => {
    const { level } = req.params;

    try {
        const lessons = await Lesson.find({ level });
        res.status(200).json(lessons);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving lessons." });
    }
});

// Get a specific lesson
router.get('/:level/:lessonNumber', async (req, res) => {
    const { level, lessonNumber } = req.params;

    try {
        const lesson = await Lesson.findOne({ level, lessonNumber });
        if (!lesson) return res.status(404).json({ message: "Lesson not found." });

        res.status(200).json(lesson);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving lesson." });
    }
});

module.exports = router;