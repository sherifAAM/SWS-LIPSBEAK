const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    level: { type: String, required: true }, // Beginner, Mediator, etc.
    lessonNumber: { type: Number, required: true },
    content: { type: String, required: true },
    test: { type: Boolean, default: false }, // Indicates whether this is a test
});

module.exports = mongoose.model('Lesson', lessonSchema);