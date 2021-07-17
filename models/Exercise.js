// reference mongoose and define Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define ExerciseSchema
const ExerciseSchema = new Schema({
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
});

// create Exercise model from ExerciseSchema
const Exercise = mongoose.model("Exercise", ExerciseSchema);

// export the model
module.exports = Exercise;