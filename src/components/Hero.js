import React from 'react';
import '../styles/Hero.css';
import { Container, Row } from 'react-bootstrap';
import BlogNavbar from './BlogNavbar';

function Hero() {
    return (
        <Container className='hero-container'>
            <BlogNavbar/>
            <figure className="text-center">
            <blockquote className="blockquote">
                <p className='fs-2'>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
        </figure>
        </Container>
        
    );
}

export default Hero;