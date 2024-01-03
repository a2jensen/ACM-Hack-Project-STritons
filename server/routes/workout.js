const express = require('express');
const router = express.Router();
// import controllers(add below)
const {
    createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout
} = require('../controllers/workoutController')

// routes

// GET all workouts(add below)
// usage: tracking statistics page?
router.get('/', getWorkouts)

// GET a single workout(add below)
// usage: calendar page, adding workouts to the calendar
router.get('/:id', getWorkout)

// POST a new workout(add below)
// usage: adding workouts through dashboard
router.post('/', createWorkout)

// UPDATE a workout(add below)
// usage: updating workouts through calendar/dashboard
router.patch('/:id', updateWorkout)

// DELETE a workout(add below)
// usage: deleting workouts through calendar/dashboard
router.delete('/:id', deleteWorkout)

// OTHER POSSIBLE ROUTES THAT CAN BE ADDED

// GET route that fetches exercise reccomendations for users
// GET route that filters workout on data/type/reps/sets(this can be done through the GET all workouts maybe?)
// GET route that fetches statistical data such as total workouts checkmarked/completed(this will require adding and editing to the schemas/routes/overall backend for this new type of data)


// Export
module.exports = router;