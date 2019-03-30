"use strict";
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Joi = require("joi");
const Workout = require("../models/Workout");
const ExerciseSchema = require("../models/Exercise");
const exerciseValidationSchema = require("../validation/exerciseValidation");

//Exercise ROUTES//

router.get(
  "/:id/:exerciseId",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    Workout.findOne({ _id: req.params.id })
      .then(workout => {
        const exercise = workout.exercises.id(req.params.exerciseId);
        res.send(exercise);
      })
      .catch(next);
  }
);

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

    Workout.findOne({ _id: workoutId }).then(workout => {
      const exercise = workout.exercises.id(exerciseId);

      exercise.set(exerciseProps);

      workout
        .save()
        .then(workout => res.json(workout))
        .catch(next);
    });
  }
);

// SET ROUTES
router.post(
  "/:id/:exerciseId",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    Workout.findOne({ _id: req.params.id }).then(workout => {
      const setProps = req.body;
      console.log(req.body);
      // Find the exercise we want to add sets to
      const exercise = workout.exercises.id(req.params.exerciseId);
      console.log(exercise);
      // Push new set to exercise
      exercise.sets.push(setProps);

      // save workout and return
      workout
        .save()
        .then(workout => res.json(workout))
        .catch(next);
    });
  }
);

module.exports = router;
