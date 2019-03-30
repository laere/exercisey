import axios from "axios";

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
