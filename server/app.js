const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// importing routes
const usersRouter = require('./routes/users');

// express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

// routes
// remember for postman tests, has to be localhost5000/users in order for routes to even run
app.use('/users', usersRouter);

dotenv.config();

// connect to db
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});

module.exports = app;
