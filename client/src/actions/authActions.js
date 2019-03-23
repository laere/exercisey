import axios from "axios";
import setAuthToken from "helpers/setAuthToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER, GET_ERRORS } from "actions/types";

export const registerUser = (formValues, history) => async dispatch => {
  console.log(formValues);
  axios
    .post("/api/users/register", formValues)
    .then(res => history.push("/login"))
    .catch(err => console.log(err));
};

export const setCurrentUser = decodedToken => {
  return {
    type: SET_CURRENT_USER,
    payload: decodedToken
  };
};

// Login User - Get user token
export const loginUser = formValues => dispatch => {
  axios
    .post("/api/users/login", formValues)
    .then(res => {
      console.log("Login AC", res);
      // Save to localstorage
      const { token } = res.data;
      // Set token to localstorage
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get formValues
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests.
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
