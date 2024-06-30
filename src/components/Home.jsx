import React, { useState } from "react";
import Hero from "./Hero";
import Main from "./Main";
import { initiateFetchingPost } from "../redux/posts/postsActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initiateDeletingBlog } from "../redux/posts/postsActions";
// import { useState } from "react";
function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (blogPosts?.length === 0) {
      dispatch(initiateFetchingPost());
    }
  }, []);
  const blogPosts = useSelector((state) => state.posts.blogPosts);
  
  return (
    <div id="home">
      <Hero
        title="Hey there, hear my mind!"

        subtitle="Duh duh dahh blahh ah hahhhha blahh ah hahhhha yum"
        flag={true}
        heroBackgroundColor={"#B2FFFF"}
      />
      
      <Main blogPosts={blogPosts} />
    </div>
  );
}

export default Home;
