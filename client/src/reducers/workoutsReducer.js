import {
  FETCH_WORKOUTS,
  FETCH_WORKOUT,
  FETCH_EXERCISE,
  DELETE_WORKOUT,
  FETCH_SET,
  IS_LOADING
} from "actions/types";

const initialState = {
  workoutList: [],
  workout: {},
  exercise: {},
  set: {},
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

    case FETCH_EXERCISE: {
      return {
        ...state,
        exercise: action.payload,
        loading: false
      };
    }

    case FETCH_SET: {
      return {
        ...state,
        set: action.payload,
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
