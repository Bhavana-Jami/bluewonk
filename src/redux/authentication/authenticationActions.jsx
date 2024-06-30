import * as types from "./authenticationActionTypes";
import { auth } from "../../firebaseConfig";

const registerStart = () => ({
  type: types.REGISTER_START,
});
const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});
const registerFailure = (error) => ({
  type: types.REGISTER_FAILURE,
  payload: error,
});

const loginStart = () => ({
  type: types.LOGIN_START,
});
const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});
const loginFailure = (error) => ({
  type: types.LOGIN_FAILURE,
  payload: error,
});

const logoutStart = () => ({
  type: types.LOGOUT_START,
});
const logoutSuccess = (user) => ({
  type: types.LOGOUT_SUCCESS,
  payload: user,
});
const logoutFailure = (error) => ({
  type: types.LOGOUT_FAILURE,
  payload: error,
});

export const initiateRegister = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(registerStart);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName,
        });
        dispatch(registerSuccess(user));
      })
      .catch((error) => dispatch(registerFailure(error.message)));
  };
};

export const initiateLogin = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .catch((error) => dispatch(loginFailure(error.message)));
  };
};

export const initiateLogout = () => {
  return function (dispatch) {
    dispatch(logoutStart);
    auth
      .signOut(auth)
      .then((response) => dispatch(logoutSuccess()))
      .catch((error) => dispatch(logoutFailure(error.message)));
  };  
};
