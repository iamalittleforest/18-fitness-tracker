// reference mongoose and define Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define ExerciseSchema
const ExerciseSchema = new Schema({
  type: String,
  name: String,
  duration: Number,
  distance: Number,
  weight: Number,
  reps: Number,
  sets: Number
});

// create Exercise model from ExerciseSchema
const Exercise = mongoose.model("Exercise", ExerciseSchema);

// export the model
module.exports = Exercise;