import { combineReducers } from "redux";
import authReducer from "reducers/authReducer";
import errorsReducer from "reducers/errorsReducer";
import workoutsReducer from "reducers/workoutsReducer";

export default combineReducers({
  auth: authReducer,
  workouts: workoutsReducer,
  errors: errorsReducer
});
