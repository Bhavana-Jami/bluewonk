import { combineReducers } from "redux";
import postsReducer from "./posts/postsReducer";
import authenticationReducer from './authentication/authenticationReducer'
import { googleSignInReducer } from "./signInWithGoogle/signInWithGoogleReducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    authentication: authenticationReducer,
    signInWithGoogle: googleSignInReducer
});

export default rootReducer;