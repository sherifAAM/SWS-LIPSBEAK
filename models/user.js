const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    currentLevel: { type: String, default: "Beginner" },
    lessonsCompleted: { type: Number, default: 0 },
    testsPassed: { type: Number, default: 0 },
    progress: { type: Number, default: 0 }, // Percentage progress
});

module.exports = mongoose.model('User', userSchema);