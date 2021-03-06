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
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            }
        }
    ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;