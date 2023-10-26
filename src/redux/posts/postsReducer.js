import { SHOW_BLOG_POST, UPDATE_LIKES } from "./postsActionTypes";

const initialState = {
    selectedPost: null,
    blogPosts: [
        {
            id: 1,
            title: "This post is about that Tamil movie",
            content: "CSS Box Shadow CSS box-shadow Property. CSS Box Shadow CSS box-shadow Property",
            name: 'Bhavana',
            likes: 0,
            shares: 30
        },
        {
            id: 2,
            title: 'A well-known quote, contained in a blockquote element.',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tem",
            name: "Nani",
            likes: 48,
            shares: 50
        },
        {
            id: 3,
            title: "This post is about that Tamil movie",
            content: "CSS Box Shadow CSS box-shadow Property. CSS Box Shadow CSS box-shadow Property",
            name: 'Sarveswara Rao',
            likes: 30,
            shares: 60
        },
        {
            id: 4,
            title: "This post is about that Tamil movie",
            content: "CSS Box Shadow CSS box-shadow Property. CSS Box Shadow CSS box-shadow Property",
            name: "Lakshmi",
            likes: 80,
            shares: 20
        },
        {
            id: 5,
            title: 'This post is about that Tamil movie',
            content: "CSS Box Shadow CSS box-shadow Property. CSS Box Shadow CSS box-shadow Property",
            name: 'Pravallika',
            likes: 60,
            shares: 80
        }
    ]
}
const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_BLOG_POST:
            const { flag, postID } = action.payload;

            return {
                ...state,
                flag: flag,
                selectedPost: state.blogPosts.find((post) =>
                 post.id === postID ? state.blogPosts.find(postID) : ''
                 )
            };
        case UPDATE_LIKES:
            const { postId, newLikes } = action.payload;
            
            return {
                ...state,
                blogPosts: state.blogPosts.map((post) =>
                    post.id === postId ? { ...post, likes: newLikes } : post
                ),
            };
        default:
            return {
                ...state,
            };
    }
};

export default postsReducer;