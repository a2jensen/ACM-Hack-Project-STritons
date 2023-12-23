const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// importing routes
const usersRouter = require('./routes/users');
const workoutRouter = require('./routes/workout')

// express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/users', usersRouter);
app.use('/workout', workoutRouter)

dotenv.config();

// connect to db
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});


// export
module.exports = app;
