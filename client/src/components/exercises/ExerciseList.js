import React from "react";
import ExerciseItem from "components/exercises/ExerciseItem";

const ExerciseList = props => {
  const { exercises } = props.workout;

  if (!exercises) {
    return <div />;
  }

  const exerciseList = props.workout.exercises.map(exercise => {
    if (!exercise) {
      return;
    }
    return <ExerciseItem key={exercise._id} exercise={exercise} />;
  });

  return <div>{exerciseList}</div>;
};

export default ExerciseList;
