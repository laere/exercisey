import {
  FETCH_WORKOUTS,
  FETCH_WORKOUT,
  DELETE_WORKOUT,
  ADD_WORKOUT,
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

    case ADD_WORKOUT: {
      return {
        ...state,
        workoutList: [action.payload, ...state.workoutList],
        loading: false
      };
    }

    case FETCH_WORKOUTS: {
      return {
        ...state,
        workoutList: action.payload,
        loading: false
      };
    }

    case FETCH_WORKOUT: {
      return {
        ...state,
        workout: action.payload,
        loading: false
      };
    }

    case DELETE_WORKOUT: {
      return {
        ...state,
        workoutList: state.workoutList.filter(w => w._id !== action.payload),
        loading: false
      };
    }
    default:
      return state;
  }
};
