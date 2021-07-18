const router = require("express").Router();
var db = require("../models");

// get all workouts (for last workout)
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .populate("exercises")
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    })
})

// put workout (by adding exercise)
router.put("/api/workouts/:id", (req, res) => {

})

// post new workout
router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
})

// get all workouts in range
router.get("/api/workouts/range", (req, res) => {

})

module.exports = router;