"use strict";
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Joi = require("joi");
const Workout = require("../models/Workout");
const ExerciseSchema = require("../models/Exercise");
const exerciseValidationSchema = require("../validation/exerciseValidation");

// @route   POST api/workout/:id
// @desc    Add a single workout
// @access  Private
router.post(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    Workout.findOne({ _id: req.params.id }).then(workout => {
      const exerciseProps = req.body;

      Joi.validate(exerciseProps, exerciseValidationSchema);

      workout.exercises.push(exerciseProps);
      workout
        .save()
        .then(workout => res.json(workout))
        .catch(next);
    });
  }
);

// @route   DELETE api/workout/:id
// @desc    Delete a single exercise
// @access  Private
router.delete(
  "/:id/:exercise_id",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    Workout.findOne({ _id: req.params.id }).then(workout => {
      const exercise = workout.exercises.find(
        exercise => exercise._id.toString() === req.params.exercise_id
      );

      // ExerciseSchema.findByIdAndRemove({ _id: req.params.exercise_id });

      exercise.remove();
      workout
        .save()
        .then(workout => res.json(workout))
        .catch(next);
    });
  }
);

router.put(
  "/:id/:exercise_id",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const exerciseProps = req.body;
    const workoutId = req.params.id;
    const exerciseId = req.params.exercise_id;

    ExerciseSchema.findByIdAndUpdate({ _id: exerciseId }, exerciseProps);
  }
);

module.exports = router;
