import axios from "axios";

import {
  FETCH_EXERCISE,
  FETCH_EXERCISES,
  DELETE_EXERCISE,
  GET_ERRORS
} from "actions/types";

export const createExercise = (formValues, history, workoutId) => dispatch => {
  axios
    .post(`/api/workouts/${workoutId}`, formValues)
    .then(res => history.push(`/workouts/${workoutId}`))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const deleteExercise = (workoutId, exerciseId, history) => dispatch => {
  axios
    .delete(`/api/workouts/${workoutId}/${exerciseId}`)
    .then(res => history.push(`/workouts/${workoutId}`))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const editExercise = (
  workoutId,
  exerciseId,
  exerciseProps,
  history
) => dispatch => {
  axios
    .put(`/api/workouts/${workoutId}/${exerciseId}`, exerciseProps)
    .then(res => history.push(`/workouts/${workoutId}`))
    .catch(err => console.log(err));
};
