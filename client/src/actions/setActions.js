import axios from "axios";
import { GET_ERRORS, FETCH_SET } from "actions/types";

export const createSet = (
  workoutId,
  exerciseId,
  setProps,
  history
) => dispatch => {
  axios
    .post(`/api/workouts/${workoutId}/${exerciseId}`, setProps)
    .then(res => history.push(`/workouts/${workoutId}`))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
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

export const fetchSet = (workoutId, exerciseId, setId) => dispatch => {
  axios
    .get(`/api/workouts/${workoutId}/${exerciseId}/${setId}`)
    .then(res => dispatch({ type: FETCH_SET, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
