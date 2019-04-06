"use strict";
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Workout = require("../models/Workout");
const validateWorkout = require("../validation/workoutValidation");

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
    Workout.find({ user: req.user.id })
      .sort({ dateCreated: -1 })
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
    const { error } = validateWorkout(req.body);

    if (error) return res.status(400).send(error.details.map(d => d.message));

    const workoutProps = { ...req.body, user: req.user.id };

    Workout.create(workoutProps)
      .then(workout => res.json(workout))
      .catch(next);
  }
);

// @route   DELETE api/workout/:id
// @desc    Add a single workout
// @access  Public
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    Workout.findOneAndRemove({ _id: req.params.id })
      .then(workout => res.json(workout))
      .catch(next);
  }
);

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const { error } = validateWorkout(req.body);

    if (error) return res.status(400).send(error.details.map(d => d.message));

    const workoutProps = req.body;

    Workout.findOneAndUpdate(
      { _id: req.params.id },
      { $set: workoutProps },
      { new: true }
    )
      .then(workout => res.send(workout))
      .catch(next);
  }
);

module.exports = router;
