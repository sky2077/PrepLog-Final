const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    Topic: {
        type: String,
        required: true
    },
    Problem: {
        type: String,
        required: true
    },
    URL: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('question', questionSchema);