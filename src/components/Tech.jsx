import React from 'react';
import Hero from './Hero';
import { useSelector } from 'react-redux';
import Main from './Main';
import ReactMachineCoding from './ReactMachineCoding';
import { Link } from 'react-router-dom';


function Travel() {
    const blogPosts = useSelector(state => state.posts.blogPosts);
    const filteredBlogPosts = blogPosts.filter(post => post.category === 'Tech');

    return (
        <div>
            <Hero title="You will never age for me, nor fade, nor die." subtitle="- Shakespeare in Love" flag={false} heroBackgroundColor="#a2d9ce" />
            {/* <Main blogPosts={filteredBlogPosts} /> */}
            <Link to="/reactMachineCoding">React Machine Coding</Link>
           {/* <h1>Javascript Machine Coding</h1>
           <h1>React Interview Questions</h1>
           <h1>Javascript Interview Questions</h1> */}

        </div>
    );
}

export default Travel;
