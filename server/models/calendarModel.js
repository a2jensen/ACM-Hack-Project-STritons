import mongoose from 'mongoose';
const { Schema } = mongoose;

const calendarSchema = new Schema({
    // Reference to specific user(refer to user schema)
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

// Creating user model
const Calendar = mongoose.model("Calendar", calendarSchema);

// Exporting user
module.exports = Calendar;