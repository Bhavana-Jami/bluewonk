import React, { useEffect } from "react";
import "../styles/Main.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { initiateFetchingPost } from "../redux/posts/postsActions";
import Loading from "./Loading";
import { HeartFill } from "react-bootstrap-icons";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";

import {
  Comment,
  CommentRounded,
  CommentTwoTone,
  Delete,
  Edit,
} from "@mui/icons-material";
import { initiateDeletingBlog } from "../redux/posts/postsActions";
function Main(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state) => state.signInWithGoogle.currentUser
  );

  const handleDelete = (postId) => {
    console.log(postId);
    dispatch(initiateDeletingBlog(postId));
    dispatch(initiateFetchingPost());
  };
  const blogPosts = useSelector((state) => state.posts.blogPosts);
  const mostPopularPosts = blogPosts
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);
  console.log(mostPopularPosts);
  const formatDate = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  return !blogPosts ? (
    <Loading />
  ) : props.content ? (
    <Grid item xs={12} id="post-content">
      {props.content}
    </Grid>
  ) : (
    <Grid
      container
      mt={1}
      // ms={2}
      display="flex"
      justifyContent="center"
      alignItems="start"
      sx={{ padding: "10%" }}
      id="main_container"
    >
      <Grid
        item
        xs={12}
        md={8}
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems={{ xs: "start", md: "start" }}
        mb={4}
        pl={{ md: "3" }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h5"
            sx={{
              borderBottom: "1px solid hsla(210, 14%, 28%, 0.3)",
              textAlign: "left",
              fontWeight: "bold",
              // paddingTop:"1rem"
              color: "#05014A !important",
            }}
          >
            Featured posts from all categories
          </Typography>
        </Grid>
        {props.blogPosts.map((post) => (
          <Grid
            item
            xs={12}
            key={post.id}
            mt={4}
            alignItems={{ xs: "start", md: "start", sm: "start" }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                height: { xs: "auto", sm: 180 },
                boxShadow: "none",
                // width: "85%",
                width: { xs: "100%", sm: "85%", md: "85%" },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: { xs: "100%", sm: 190 },
                  // height: { xs: 140, sm: "100%" },
                  height: "100%",
                  objectFit: "cover",
                }}
                image={post.image}
                alt={post.imageLabel}
              />
              <CardContent
                sx={{
                  // height: { xs: 140, sm: "100%" },
                  height: "100%",

                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                  flexDirection: "column",
                  flex: 1,
                  wordBreak: "break-word",
                  // p: { xs: 0, sm: 2, md: 2 },
                  p: { xs: 0 },
                  pt: { xs: 2, sm: 0, md: 0 },
                  pl: { sm: 2, md: 2 },
                  // m:{sm:0}
                }}
              >
                <Typography
                  component="h5"
                  variant={{ md: "100px", sm: "0.1rem" }}
                  sx={{
                    wordWrap: "break-word",
                    mb: 1,
                    color: "#05014A !important",
                  }}
                >
                  {post.title}
                </Typography>
                <>
                  <Typography
                    variant="p"
                    mb={1}
                    sx={{ color: "#0e0968 !important" }}
                  >
                    {post.subtitle}
                  </Typography>
                  <Box
                    sx={{
                      wordBreak: "break-word",
                      mb: 1,
                      color: "#141144",
                      // fontSize: "10px",
                      display: "flex",
                    }}
                  >
                    <div style={{ fontSize: "1rem" }}>
                      {formatDate(post.createdAt)} &nbsp;&nbsp;&nbsp;{" "}
                    </div>
                    <div style={{ fontSize: "1rem" }}>
                      <HeartFill fontSize="1rem" /> {post.likes}{" "}
                      &nbsp;&nbsp;&nbsp;
                    </div>
                    <div style={{ fontSize: "1rem" }}>
                      <ChatBubbleOutlinedIcon fontSize="1rem" />
                      {post.comments}
                    </div>
                  </Box>

                  {currentUser?.email == "bhavanajami111@gmail.com" && (
                    <Box>
                      <Link
                        to={`/createpost/${post.id}`}
                        style={{ textDecoration: "none", display: "block" }}
                      >
                        <Edit />
                      </Link>
                      <Delete onClick={() => handleDelete(post.id)} />
                    </Box>
                  )}
                </>

                <Link
                  to={`/posts/${post.id}`}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <Typography variant="subtitle1" color="primary">
                    Continue reading...
                  </Typography>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {location.pathname === "/" && (
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          flexDirection="column"
          alignItems="start"
        >
          <Grid
            container
            display="flex"
            flexDirection="column"
            alignItems={{ xs: "start", sm: "start", md: "start" }}
          >
            <Grid
              item
              mb={3}
              sx={{ width: { xs: "100%", sm: "75%", md: "75%" } }}
            >
              <Typography
                variant="h5"
                sx={{ borderBottom: "1px solid hsla(210, 14%, 28%, 0.3)" }}
                fontWeight={"bold"}
              >
                Most Popular
              </Typography>
              {mostPopularPosts.map((popularPost) => {
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
                    {" "}
                    <Link
                      to={`/posts/${popularPost.id}`}
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
            <Grid item sx={{ width: { xs: "100%", sm: "75%", md: "75%" } }}>
              <Typography
                variant="h5"
                sx={{ borderBottom: "1px solid hsla(210, 14%, 28%, 0.3)" }}
                fontWeight={"bold"}
                mt={3}
              >
                Recent Blogs
              </Typography>
              {mostPopularPosts.map((popularPost) => {
                return (
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="start"
                    mt={4}
                    sx={{ borderBottom: "1px solid hsla(210, 14%, 28%, 0.3)" }}
                    pb={2}
                  >
                    <Link
                      to={`/posts/${popularPost.id}`}
                      style={{ textDecoration: "none", display: "block" }}
                    >
                      <Typography mb={1}>
                        {popularPost.title.slice(0, 30)}
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
        </Grid>
      )}
    </Grid>
  );
}

export default Main;
