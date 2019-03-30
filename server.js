"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const passport = require("passport");
const path = require("path");

const users = require("./routes/userRoutes");
const workouts = require("./routes/workoutRoutes");
const exercises = require("./routes/exerciseRoutes");

const app = express();

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true },
  () => console.log("MongoDB connected")
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api/workouts", workouts);
app.use("/api/workouts", exercises);

// Error handling middleware
app.use(function(err, req, res, next) {
  console.error(err.statusCode, err.message);
  res.status(err.statusCode).send(err.message);
});

// Only ran inside production (in heroku)
if (process.env.NODE_ENV === "production") {
  // Express will server up prod assets
  // like main.js file or main.css file
  app.use(express.static("client/build"));
  // Express will serve up the index.html file
  // if it does not recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
