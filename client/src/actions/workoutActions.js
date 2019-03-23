import {
  ADD_WORKOUT,
  DELETE_WORKOUT,
  EDIT_WORKOUT,
  GET_ERRORS,
  FETCH_WORKOUTS
} from "actions/types";
import axios from "axios";

export const createWorkout = (formValues, history) => dispatch => {
  axios
    .post("/api/workouts", formValues)
    .then(res => dispatch({ type: ADD_WORKOUT, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));

  history.push("/workouts");
};

export const fetchWorkouts = () => dispatch => {
  axios
    .get("/api/workouts")
    .then(res => dispatch({ type: FETCH_WORKOUTS, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
