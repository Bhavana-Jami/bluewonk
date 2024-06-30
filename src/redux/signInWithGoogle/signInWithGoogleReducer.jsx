import {
  GOOGLE_SIGN_IN_FAILURE,
  GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_OUT_FAILURE,
  GOOGLE_SIGN_OUT_START,
  GOOGLE_SIGN_OUT_SUCCESS,
} from "./signInWithGoogleActionTypes";

const initialState = {
  currentUser: JSON.parse(localStorage.getItem('currentuser')) || null,
  loading: false,
  error: null,
};

export const googleSignInReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_SIGN_IN_START:
    case GOOGLE_SIGN_OUT_START:
      return {
        ...state,
        loading: true,
      };
    case GOOGLE_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        error: null,
      };
    case GOOGLE_SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        loading: false,
        error: null,
      };
    case GOOGLE_SIGN_IN_FAILURE:
    case GOOGLE_SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
