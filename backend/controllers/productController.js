const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');


exports.getProducts = catchAsyncErrors(async(req,res,next) => {
    // const products = "hello";
    // if(!products){
    //     next(new ErrorHandler('No Products',401));
    // }

    res.status(200).json({
        success: true
    });
});