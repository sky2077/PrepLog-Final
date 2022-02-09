const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    Topic: {
        type: String,
        required: true
    },
    Total_No_Of_Questions: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('TopicCard', topicSchema);