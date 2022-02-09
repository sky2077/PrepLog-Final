const express = require('express');
const app = express();
const  morgan = require("morgan");


const cookieParser = require('cookie-parser');

const errorMiddleware = require('./middlewares/errors');
const path = require("path");

// Setting up config file
if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: 'backend/config/config.env' })

app.use(express.json());


app.use(cookieParser());
app.use(morgan("common"));
//Import all routes

const topics = require('./routes/topics');
const auth = require('./routes/auth');

app.use("/images", express.static(path.join(__dirname, "Public/images")));

app.use('/api/v1',topics);
app.use('/api/v1',auth);

if(process.env.NODE_ENV === 'PRODUCTION'){
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'../frontend/build/index.html'))
    })

}


// Middleware to handle errors
app.use(errorMiddleware);

app.use(express.urlencoded({extended:false}));

module.exports = app;