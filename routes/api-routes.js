const router = require("express").Router();
var db = require("../models");

// get all workouts (for last workout)
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    })
})

// put workout (by adding exercise)
router.put("/api/workouts/:id", (req, res) => {

})

// post new workout
router.post("/api/workouts", ({ body }, res) => {

})

// get all workouts in range
router.get("/api/workouts", (req, res) => {

})

module.exports = router;