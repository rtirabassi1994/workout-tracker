const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter a type of exercise"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter name of exercise"
            },
            duration: {
                type: Number,
                trim: true,
                required: "Enter the duration of exercise"
            },
            weight: {
                type: Number,
                trim: true,
                required: "Enter the weight"
            },
            reps: {
                type: Number,
                trim: true,
                required: "Enter the number of reps"
            },
            sets: {
                type: Number,
                trim: true,
                required: "Enter the number of sets"
            },
            distance: {
                type: Number,
                trim: true,
                required: "Enter the distance of workout"
            }
        }
    ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;