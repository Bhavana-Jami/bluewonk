import * as types from "./authenticationActionTypes";
const initialState = {
  loading: false,
  currentUser: [],
  error: "",
};

const autheticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_START:
    case types.LOGIN_START:
    case types.LOGOUT_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOGOUT_SUCCESS: {
      return {
        ...state,
        currentUser: null,
      };
    }
    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        error: "",
      };
    }
    case types.REGISTER_FAILURE:
    case types.LOGIN_FAILURE:
    case types.LOGOUT_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: "",
        currentUser: [],
      };
    }
    default:
      return state;
  }
};
export default autheticationReducer;
