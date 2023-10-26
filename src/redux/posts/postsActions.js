import { SHOW_BLOG_POST, UPDATE_LIKES } from "./postsActionTypes";

export const showBlogPost = (flag, title, content, id) => {
    return {
        type: SHOW_BLOG_POST,
        payload: { flag, id }
    };
}

export const updateLikes = (postId, newLikes) => {
    return {
        type: UPDATE_LIKES,
        payload: { postId, newLikes }
    };
}