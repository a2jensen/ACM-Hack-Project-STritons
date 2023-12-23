const express = require('express');
const router = express.Router();
// import controllers(add below)

// TESTING POSTMAN
router.get('/', (req, res) => {
  res.json({mssg: 'GET all workouts'})
})

// routes

// This exports router
module.exports = router;