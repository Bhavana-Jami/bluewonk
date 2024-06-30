import React, { useEffect, useState } from "react";
import "../styles/ReadPost.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Link from '@mui/material/Link';
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { db } from "../firebaseConfig.jsx";
import { Grid, Typography, Box } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { initiateUpdatingLikes } from "../redux/posts/postsActions";
import { HeartFill } from "react-bootstrap-icons";
import { Favorite, ShareRounded } from "@mui/icons-material";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import Loading from "./Loading.jsx";
import FormattedBlogContent from "./FormattedBlogContent.jsx";

function ReadPost() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const dispatch = useDispatch();
  const blogPosts = useSelector((state) => state.posts.blogPosts);

  //fetching post details from main by doc.id from firebase
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, "posts", postId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPost(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [postId, post]);
  const [userLikeStatus, setUserLikeStatus] = useState(false);
  const handleLikes = () => {
    dispatch(initiateUpdatingLikes(postId, userLikeStatus));
    setUserLikeStatus(!userLikeStatus);
  };
  const formatDate = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  return !post ? (
    <Loading />
  ) : (
    <Grid
      container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      // spacing={3}
      gap={3}
      // p={3}
    >
      <Grid item xs={12} id="blog-hero-section">
        <Grid
          container
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          id="blog-hero-child"
        >
          <Grid item>
            <Breadcrumbs
              aria-label="breadcrumb"
              separator={
                <NavigateNextIcon sx={{ color: "hotpink", fontSize: "1rem" }} />
              }
            >
              <Link
                underline="hover"
                // color="primary"
                href="/"
                sx={{
                  // fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  listStyle: "none",
                  border: "none",
                }}
              >
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Home
              </Link>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  // fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
                  color: "hotpink",
                }}
              >
                <HeartFill sx={{ mr: 0.5 }} fontSize="inherit" />
                &nbsp;
                {post.category}
              </Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item>
            {/* <Grid item> */}
            <Typography
              style={{ color: "white" }}
              // variant={{ xs: "h5", sm: "h2", md: "h2" }}
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
                color: "white",
                marginTop: { md: "-4.8rem" },
              }}
            >
              {post.subtitle}
            </Typography>

            {/* </Grid> */}

            {/* <Grid item> */}
            <Typography p={2} variant={{ xs: "h5", sm: "h4", md: "h4" }}>
              {post.tags}
            </Typography>

            {/* </Grid> */}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={10} m={{ xs: 4, sm: 5 }}>
        <Grid
          container
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ color: "#05014A" }}
        >
          <Grid item xs={12} sm={10}>
            <Grid container>
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"start"}
                alignItems={"center"}
                gap={{ xs: 2, sm: 4 }}
                sx={{ borderBottom: "1px solid grey" }}
                // pe={4}
                // pb={1}
              >
                <Typography variant={{ xs: "h5", sm: "h4", md: "h4" }}>
                  {post.category}
                </Typography>
                <Typography variant={{ xs: "h5", sm: "h4", md: "h4" }}>
                  12-12-2020
                </Typography>
                <Typography
                  variant={{ xs: "h5", sm: "h4", md: "h4" }}
                  sx={{ cursor: "pointer" }}
                  onClick={handleLikes}
                >
                  {userLikeStatus ? (
                    <Favorite />
                  ) : (
                    <FavoriteBorderOutlinedIcon />
                  )}
                  {post.likes}
                </Typography>
                <Typography variant="h6">
                  {/* <ShareRounded /> */}
                  <ChatBubbleOutlinedIcon />
                  {post.shares}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                pt={3}
                sx={{
                  lineHeight: "1.9rem",
                  fontSize: "1.1rem",
                  textAlign: "justify",
                }}
              >
                {/* {post.content} */}
                <FormattedBlogContent content={post.content} />
              </Grid>
            </Grid>
            <Grid item sx={{ width: { xs: "100%", sm: "75%", md: "75%" } }}>
              <Typography
                variant="h5"
                sx={{ borderBottom: "1px solid hsla(210, 14%, 28%, 0.3)" }}
                fontWeight={"bold"}
                mt={3}
              >
                Similar Posts
              </Typography>
              {blogPosts
                .filter((p) => p.category == post.category)
                .map((popularPost) => {
                  return (
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="start"
                      mt={4}
                      sx={{
                        borderBottom: "1px solid hsla(210, 14%, 28%, 0.3)",
                      }}
                      pb={2}
                    >
                      <Link
                        href={`/posts/${popularPost.id}`}
                        style={{ textDecoration: "none", display: "block" }}
                      >
                        <Typography mb={1}>
                          {popularPost.title.slice(0, 27)}
                        </Typography>
                      </Link>
                      <Typography sx={{ fontSize: "15px" }}>
                        {formatDate(popularPost.createdAt)}
                        &nbsp;&nbsp; <HeartFill /> {popularPost.likes}{" "}
                        &nbsp;&nbsp;
                        {popularPost.category}
                      </Typography>
                    </Box>
                  );
                })}
            </Grid>
          </Grid>
          {/* </Grid> */}
          {/* </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ReadPost;
