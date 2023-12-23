const express = require('express');
const router = express.Router();
// import controllers(add below)
const {
    createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout
} = require('../controllers/workoutController')

// routes

// GET all workouts(add below)
// this will be utilized for a tracking statistics page
router.get('/', getWorkouts)

// GET a single workout(add below)
// this will be utilized for adding information to calendar
router.get('/:id', getWorkout)

// POST a new workout(add below)
// this will be utlized for adding workouts through dashboard
router.post('/', createWorkout)

// UPDATE a workout(add below)
// this will be utilized for updating workouts through calendar/dashbaord
router.patch('/:id', updateWorkout)

// DELETE a workout(add below)
// this will be utilized for deleting workouts in calendar/dashboard
router.delete('/:id', deleteWorkout)

// Export
module.exports = router;