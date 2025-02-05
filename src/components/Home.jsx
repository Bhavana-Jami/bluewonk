import React, { useState } from "react";
import Hero from "./Hero";
import Main from "./Main";
import { initiateFetchingPost } from "../redux/posts/postsActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initiateDeletingBlog } from "../redux/posts/postsActions";
// import { useState } from "react";
import TabsNav from "./TabsNav";
import Footer from "./Footer";
import { Tabs } from "react-bootstrap";
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
      <Hero />

      <TabsNav/>
      <Main blogPosts={blogPosts} />
      <Footer/>
    </div>
  );
}

export default Home;
