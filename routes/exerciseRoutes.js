"use strict";
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Workout = require("../models/Workout");
const validateExercise = require("../validation/exerciseValidation");
const validateSet = require("../validation/setValidation");

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
    const { error } = validateExercise(req.body);

    if (error) return res.status(400).send(error.details.map(d => d.message));

    Workout.findOne({ _id: req.params.id }).then(workout => {
      const exerciseProps = req.body;

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
  "/:id/:exerciseId",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    Workout.findOne({ _id: req.params.id }).then(workout => {
      const exercise = workout.exercises.find(
        exercise => exercise._id.toString() === req.params.exerciseId
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
  "/:id/:exerciseId",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const { error } = validateExercise(req.body);

    if (error) return res.status(400).send(error.details.map(d => d.message));

    const exerciseProps = req.body;

    Workout.findOne({ _id: req.params.id }).then(workout => {
      const exercise = workout.exercises.id(req.params.exerciseId);

      exercise.set(exerciseProps);

      workout
        .save()
        .then(workout => res.json(workout))
        .catch(next);
    });
  }
);

////////////////////////////////////////////////////////////////////////////////////
// SET ROUTES
////////////////////////////////////////////////////////////////////////////////////
router.post(
  "/:id/:exerciseId",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const { error } = validateSet(req.body);

    if (error) return res.status(400).send(error.details.map(d => d.message));

    Workout.findOne({ _id: req.params.id }).then(workout => {
      const setProps = req.body;
      // Find the exercise we want to add sets to
      const exercise = workout.exercises.id(req.params.exerciseId);
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

router.delete(
  "/:id/:exerciseId/:setId",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    Workout.findOne({ _id: req.params.id }).then(workout => {
      // Find exercise
      const exercise = workout.exercises.id(req.params.exerciseId);
      // Find set within exercises array
      const set = exercise.sets.id(req.params.setId);
      // Remove set
      set.remove();

      // Save and send back workout
      workout
        .save()
        .then(workout => res.json(workout))
        .catch(next);
    });
  }
);

router.put(
  "/:id/:exerciseId/:setId",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const { error } = validateSet(req.body);

    if (error) return res.status(400).send(error.details.map(d => d.message));

    const setProps = req.body;

    Workout.findOne({ _id: req.params.id }).then(workout => {
      const exercise = workout.exercises.id(req.params.exerciseid);
      const set = exercise.sets.id(req.params.setId);

      set.set(setProps);

      workout
        .save()
        .then(workout => res.json(workout))
        .catch(next);
    });
  }
);

module.exports = router;
