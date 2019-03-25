import React from "react";
import ExerciseItem from "components/exercises/ExerciseItem";
import Spinner from "components/common/Spinner";
import { connect } from "react-redux";

const ExerciseList = props => {
  console.log(props.workout);
  const { exercises } = props.workout;

  if (!exercises) {
    return <div />;
  }

  const exerciseList = props.workout.exercises.map(exercise => {
    if (!exercise) return;
    return <ExerciseItem key={exercise._id} exercise={exercise} />;
  });

  return <div>{exerciseList}</div>;
};

export default ExerciseList;
