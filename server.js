// import dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// create the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// set up the Express app to generate request logs
app.use(logger("dev"));

// set up the Express app to parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set up the Express app to serve static files
app.use(express.static("public"));

// set up the Express app to use routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

// connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fitnessdb", 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});