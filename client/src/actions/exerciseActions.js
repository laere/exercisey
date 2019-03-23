import axios from "axios";

import {
  FETCH_EXERCISE,
  FETCH_EXERCISES,
  DELETE_EXERCISE,
  GET_ERRORS
} from "actions/types";

export const createExercise = (formValues, history, workoutId) => dispatch => {
  axios
    .post(`/api/workouts/${workoutId}`)
    .then(res => dispatch({ type: FETCH_EXERCISES, payload: action.payload }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));

  history.push(`/workouts/${workoutId}`);
};
