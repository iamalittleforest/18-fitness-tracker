// reference mongoose and define Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define WorkoutSchema
const ExerciseSchema = new Schema({

});

// create Exercise model from ExerciseSchema
const Exercise = mongoose.model("Exercise", ExerciseSchema);

// export the model
module.exports = Exercise;