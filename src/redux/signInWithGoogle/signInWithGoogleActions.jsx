import { auth, googleAuthProvider } from "../../firebaseConfig";
import {
  GOOGLE_SIGN_IN_FAILURE,
  GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_OUT_FAILURE,
  GOOGLE_SIGN_OUT_START,
  GOOGLE_SIGN_OUT_SUCCESS,
} from "./signInWithGoogleActionTypes";

export const googleSignInStart = () => {
  return {
    type: GOOGLE_SIGN_IN_START,
  };
};

export const googleSignInSuccess = (user) => {
  return {
    type: GOOGLE_SIGN_IN_SUCCESS,
    payload: user,
  };
};

export const googleSignInFailure = (error) => {
  return {
    type: GOOGLE_SIGN_IN_FAILURE,
    payload: error,
  };
};

export const googleSignOutStart = () => {
  return {
    type: GOOGLE_SIGN_OUT_START,
  };
};

export const googleSignOutSuccess = (user) => {
  return {
    type: GOOGLE_SIGN_OUT_SUCCESS,
    payload:user
  };
};

export const googleSignOutFailure = (error) => {
  return {
    type: GOOGLE_SIGN_OUT_FAILURE,
    payload: error,
  };
};

export const initiateGoogleSignIn = () => {
  return (dispatch) => {
    dispatch(googleSignInStart());
    auth
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(googleSignInSuccess(user));
        localStorage.setItem("currentuser", JSON.stringify(user)); // Store user in local storage
      })
      .catch((error) => dispatch(googleSignInFailure(error.message)));
  };
};

export const initiateGoogleSignOut = () => {
  return (dispatch) => {
    dispatch(googleSignOutStart());
    auth
      .signOut()
      .then(() => {
        dispatch(googleSignOutSuccess());
        localStorage.removeItem("currentuser"); // Remove user from local storage
      })
      .catch((error) => dispatch(googleSignOutFailure(error.message)));
  };
};
