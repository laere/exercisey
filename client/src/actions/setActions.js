import axios from "axios";
import { GET_ERRORS } from "actions/types";

export const createSet = (
  workoutId,
  exerciseId,
  setProps,
  history
) => dispatch => {
  axios
    .post(`/api/workouts/${workoutId}/${exerciseId}`, setProps)
    .then(res => history.push(`/workouts/${workoutId}`))
    .catch(err => console.log(err));
};

export const deleteSet = (
  workoutId,
  exerciseId,
  setId,
  history
) => dispatch => {
  axios
    .delete(`/api/workouts/${workoutId}/${exerciseId}/${setId}`)
    .then(res => history.push(`/workouts/${workoutId}`))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
