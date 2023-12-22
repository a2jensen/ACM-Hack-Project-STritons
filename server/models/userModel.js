import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        // Sets a default profile picture for the user
        default: "/images/profilePic.png"
    }
});

// Creating user model
const User = mongoose.model("User", userSchema);

// Exporting user
module.exports = User;