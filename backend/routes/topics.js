const express = require('express');
const app = require('../app');
const router = express.Router();

const {
    getTopics,
    getQuestions
    } = require('../controllers/topicController');

router.route('/topics').get(getTopics);
router.route('/questions').get(getQuestions);



module.exports = router;