import {
  GET_ERRORS,
  FETCH_WORKOUT,
  FETCH_WORKOUTS,
  IS_LOADING,
  CLEAR_ERRORS
} from "actions/types";
import axios from "axios";

export const isLoading = () => {
  return {
    type: IS_LOADING
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const createWorkout = (workoutProps, history) => dispatch => {
  axios
    .post("/api/workouts", workoutProps)
    .then(res => {
      history.push("/workouts");
      // Push back to workouts page
    })
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const fetchWorkouts = () => dispatch => {
  dispatch(isLoading());
  axios
    .get("/api/workouts")
    .then(res => dispatch({ type: FETCH_WORKOUTS, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const fetchWorkout = id => dispatch => {
  dispatch(isLoading());

  axios
    .get(`/api/workouts/${id}`)
    .then(res => dispatch({ type: FETCH_WORKOUT, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const deleteWorkout = (workoutId, history) => dispatch => {
  axios
    .delete(`/api/workouts/${workoutId}`)
    .then(res => dispatch({ type: FETCH_WORKOUT, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));

  history.push("/workouts");

  // history.push("/workouts");
};

export const editWorkout = (workoutId, workoutProps, history) => dispatch => {
  axios
    .put(`/api/workouts/${workoutId}`, workoutProps)
    .then(res => history.push(`/workouts/${workoutId}`))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
