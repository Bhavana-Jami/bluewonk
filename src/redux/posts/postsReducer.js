import { CREATE_POST, FETCH_POST_SUCCESS,DELETE_POST, UPDATE_LIKES_SUCCESS, UPDATE_POST } from "./postsActionTypes";

const initialState = {
    loading: false,
    selectedPost: null,
    blogPosts: [],
    postId: "bha"
}
const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return {
                ...state,
                postId: action.payload

            }
        case FETCH_POST_SUCCESS:
            {
                return {
                    ...state,
                    loading: false,
                    blogPosts: action.payload
                }
            }
        case UPDATE_POST:
            return {
                ...state,
                blogPosts: state.blogPosts.map((post) =>
                    post.id === action.payload.id ? { ...post, ...action.payload } : post
                ),
            }
        case DELETE_POST:{
            return{
                ...state
            }
        }
        case UPDATE_LIKES_SUCCESS:

            return {
                ...state,
                blogPosts: state.blogPosts.map((post) =>
                    post.id === action.payload.id ? action.payload : post
                )
            };

        default:
            return {
                ...state,
            };
    }
};

export default postsReducer;