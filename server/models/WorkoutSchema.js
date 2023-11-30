import mongoose from 'mongoose';
const { Schema } = mongoose;

// Defining the workout schema
const workoutSchema = new Schema({
    // Reference to the user who owns workout(refer to User Schema)
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    // Day of the week for the workout
    day: {
        type: String,
        enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satruday", "Sunday"],
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