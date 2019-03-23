import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "reducers/authReducer";
import errorsReducer from "reducers/errorsReducer";
import workoutsReducer from "reducers/workoutsReducer";

export default combineReducers({
  auth: authReducer,
  workouts: workoutsReducer,
  errors: errorsReducer,
  form: reduxForm
});
