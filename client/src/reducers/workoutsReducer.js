import {
  FETCH_WORKOUTS,
  FETCH_WORKOUT,
  DELETE_WORKOUT,
  GET_ERRORS,
  IS_LOADING
} from "actions/types";

const initialState = {
  workoutList: [],
  workout: {},
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING: {
      return {
        ...state,
        loading: true
      };
    }

    case FETCH_WORKOUTS: {
      return {
        ...state,
        workoutList: action.payload
      };
    }

    case FETCH_WORKOUT: {
      return {
        ...state,
        workout: action.payload
      };
    }

    case DELETE_WORKOUT: {
      return {
        ...state,
        workoutList: state.workoutList.filter(w => w._id !== action.payload)
      };
    }
    default:
      return state;
  }
};
