"use strict";
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Joi = require("joi");
const User = require("../models/User");
const Workout = require("../models/Workout");
const ExerciseSchema = require("../models/Exercise");
const workoutValidationSchema = require("../validation/workoutValidation");
const errors = require("../validation/errors");

// @route   GET api/workout/test
// @desc    Tests workout route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Workout route working!" }));

// @route   GET api/workout
// @desc    Get all workouts for logged in user
// @access  Public
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    User.findOne({ user: req.user.id })
      .then(() => Workout.find({ user: req.user.id }))
      .then(workouts => res.json(workouts))
      .catch(next);
  }
);

// @route   GET api/workout/:id
// @desc    Get a single workout
// @access  Public
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    Workout.findById(req.params.id)
      .then(workout => res.json(workout))
      .catch(next);
  }
);

// @route   POST api/workout
// @desc    Add a single workout
// @access  Public
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const workoutProps = { ...req.body, user: req.user.id };

    workoutValidationSchema
      .validate(workoutProps)
      .then(validatedWorkout => {
        Workout.create(workoutProps)
          .then(workout => res.json(workout))
          .catch(next);
      })
      .catch(validationError =>
        res.send(validationError.details.map(d => d.message))
      );

    // Workout.create(workoutProps)
    //   .then(workout => res.json(workout))
    //   .catch(next);
  }
);

// @route   DELETE api/workout/:id
// @desc    Add a single workout
// @access  Public
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    Workout.deleteOne({ _id: req.params.id })
      .then(() => Workout.find({ user: req.user.id }))
      .then(workouts => res.json(workouts))
      .catch(next);
  }
);

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const workoutId = req.params.id;
    const workoutProps = req.body;

    Workout.findByIdAndUpdate({ _id: workoutId }, workoutProps)
      .then(() => Workout.findById(workoutId))
      .then(workout => res.send(workout))
      .catch(next);
  }
);

//// EXERCISES/////////////////////////////////////////////

// @route   POST api/workout/:id
// @desc    Add an exercise
// @access  Public

module.exports = router;
