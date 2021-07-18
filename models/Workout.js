// reference mongoose and define Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define WorkoutSchema
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercises: [{
    type: {
      type: String,
      trim: true,
      require: true
    },

    name: {
      type: String,
      trim: true,
      require: true
    },

    duration: {
      type: Number,
      duration: true
    },

    distance: {
      type: Number
    },

    weight: {
      type: Number
    },

    reps: {
      type: Number
    },

    sets: {
      type: Number
    }
  }]
});

// create Workout model from WorkoutSchema
const Workout = mongoose.model("Workout", WorkoutSchema);

// export the model
module.exports = Workout;