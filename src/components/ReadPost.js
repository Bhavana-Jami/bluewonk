import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../styles/ReadPost.css';
import { useDispatch, useSelector } from 'react-redux';
import { showBlogPost } from '../redux/index.js';
import { updateLikes } from '../redux/posts/postsActions';

function ReadPost() {
    const postTitle = useSelector((state) => state.posts.selectedPost.title);
    const postContent = useSelector((state) => state.posts.selectedPost.content);
    const postLikes = useSelector((state) => state.posts.selectedPost.likes);

    const dispatch = useDispatch();

    return (
        <Container className='read-post-container'>
            <h1>{postTitle}</h1>
            <button onClick={() => dispatch(showBlogPost(false))}>Close</button>
            <button>Heart emoji {postLikes}</button>
            <p className="formatted-text">{postContent}</p>
        </Container>
    );
}

export default ReadPost;