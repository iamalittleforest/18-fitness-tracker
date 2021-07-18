// import dependencies
const router = require("express").Router();
var path = require("path");

// index route
router.get("/", (req, res) => {
  res.sendFile(path.join(_dirname, "../public/index.html"));
});

// exercise route
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(_dirname, "../public/exercise.html"));
});

// stats route
router.get("/stats", (req, res) => {
  res.sendFile(path.join(_dirname, "../public/stats.html"));
});

// export router
module.exports = router;