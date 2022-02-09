const Topic = require('../models/topics');
const Question = require('../models/questions');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncErrors');



exports.getTopics = catchAsyncError(async (req,res,next) => {

    const topics = await Topic.find({});

     if(!topics){
        return next(new ErrorHandler('Error while loading the website',401));
     }

     res.status(200).json({
         success: true,
         topics
     });
});

exports.getQuestions = catchAsyncError(async (req,res,next) => {

    const questions = await Question.find({});

     if(!questions){
        return next(new ErrorHandler('Error while loading the website',401));
     }

     res.status(200).json({
         success: true,
         questions
     });
});

