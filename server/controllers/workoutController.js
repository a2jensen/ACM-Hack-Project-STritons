// importing mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// importing workoutModel
const Workout = require('../models/workoutModel')

// add all crud functions

// GET a single workout data
const getWorkout = async (req, res) => {
    const { id } =  req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findById(id)

    if(!workout) {
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}

// GET all workout data
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

// POST workout data
const createWorkout = async (req, res) => {
    const {day, exercise, sets, reps} = req.body

    let emptyInputs = []

    if(!exercise){
        emptyInputs.push('exercise')
    }
    if(!day){
        emptyInputs.push('day')
    }
    if(!sets){
        emptyInputs.push('sets')
    }
    if(!reps){
        emptyInputs.push('reps')
    }
    if(emptyInputs.length > 0){
        return res.status(400).json({ error: 'Please fill in the following fields', emptyInputs})
    }
    
    try {
        const workout = await Workout.create({day, exercise, sets, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// UPDATE workout data
const updateWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error : 'No workout found and id is invalid'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!workout){
        return res.status(400).json({error : 'No workout found and id is invalid'})
    }

    res.status(200).json(workout)
}

// DELETE workout data
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error : 'No workout found and id is invalid'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout) {
        return res.status(400).json({error: 'No workout found'})
    }

    return res.status(200).json(workout)
}

// export
module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}