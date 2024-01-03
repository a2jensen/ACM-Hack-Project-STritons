const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining the workout schema
const workoutSchema = new Schema({
    // Day of the week for the workout
    day: {
        type: String,
        enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        required: true
    },
    // Type of exercise
    exercise: {
        type: String,
        required: true
    },
    // How many sets for the exercise
    sets: {
        type: Number,
        required: true
    },
    // How many reps for the exercise
    reps: {
        type: Number,
        required: true
    }
    
});

// Defining the workout model
const Workout = mongoose.model('Workout', workoutSchema);

// Exporting workout model
module.exports = Workout;