import React from 'react';
import { Card, Button, Container, Row, Col, CardBody } from 'react-bootstrap';
import { data } from '../components/Mockdata';
import { ArrowRight, HeartFill, Heart } from 'react-bootstrap-icons';
import '../styles/Posts.css';
import { showBlogPost, updateLikes } from '../redux';
import { useDispatch, useSelector } from 'react-redux';

function Posts() {
    const dispatch = useDispatch();
    const blogPosts = useSelector((state) => state.posts.blogPosts);

    const handlePostLikes = (postId) => {
        const updatedLikes = blogPosts.find((post) => post.id === postId).likes + 1;
        dispatch(updateLikes(postId, updatedLikes));
    };

    const handleShowBlogPost = (flag, postId) => {
        dispatch(showBlogPost(flag, postId));
    };
    console.log(blogPosts)
    return (
        <Container>
            <Row className='card-container'>
                {blogPosts.map((post, key) => (
                    <Card className='card' onClick={() => handleShowBlogPost(post.id, true)}>
                        <Card.Body key={key}>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>{post.content.substring(0, 20) + '...'}</Card.Text>
                            <Card.Text className='card-foot'>
                                <span>Bhavana Jand</span>
                                <span>
                                    <HeartFill /> {post.likes} &nbsp; &nbsp;
                                </span>
                                <button onClick={() => handlePostLikes(post.id)}>
                                    <Heart /> {post.likes}
                                </button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
        </Container>
    );
}

export default Posts;