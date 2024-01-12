// importing mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('../models/userModel')

// login a user
const loginUser = async (req, res) => {
  res.json({mssg: 'login user'})
}

// signup a user
const signupUser = async (req, res) => {
  res.json({mssg: 'signup user'})
}

module.exports = { signupUser, loginUser }