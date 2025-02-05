import React from 'react';
import Hero from './Hero';
import { useSelector } from 'react-redux';
import Main from './Main';
import TabsNav from "./TabsNav";
function Travel() {
  const blogPosts = useSelector(state => state.posts.blogPosts);
  const filteredBlogPosts = blogPosts.filter(post => post.category === 'Love');
  console.log(blogPosts)
  return (
    <div>
      {/* <Hero title="You will never age for me, nor fade, nor die." subtitle="- Shakespeare in Love" flag={false} heroBackgroundColor="#a2d9ce" /> */}
      {/* <Main blogPosts={filteredBlogPosts} /> */}
      <TabsNav/>
    </div>
  );
}

export default Travel;
