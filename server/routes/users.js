const express = require('express');
const router = express.Router();
// import controllers(add below)

// TESTING POSTMAN
router.get('/', (req, res) => {
  res.json({mssg: 'GET all workouts'})
})

// GET all workouts(add below)
// this will be utilized for a tracking statistics page

// GET a single workout(add below)
// this will be utilized for adding information to calendar

// POST a new workout(add below)
// this will be utlized for adding workouts through dashboard

// UPDATE a new workout(add below)
// this will be utilized for updating workouts through calendar/dashbaord

// DELETE a workout(add below)
// this will be utilized for deleting workouts in calendar/dashboard

// This exports router
module.exports = router;
