import React, { useState } from 'react';
import '../styles/Home.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Posts from './Posts';
import BlogNavbar from './BlogNavbar';
import '../styles/Home.css';
import Hero from './Hero';
import ReadPost from './ReadPost';
import { useSelector } from 'react-redux';

function Home() {
    const showBlogPost = useSelector((state) => state.posts.flag);
    console.log(showBlogPost);

    return (
        <Container className='home-grid'>
            {showBlogPost ? (
                <Row className="col-lg-12">
                    <ReadPost />
                </Row>
            ) : (
                <>
                    {/* <Row className="col-lg-12">
                        <Hero />
                    </Row> */}
                    <Row className="col-lg-12">
                        <Posts />
                    </Row>
                </>
            )}
        </Container>
    );
}

export default Home;