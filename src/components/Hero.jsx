import React, { useEffect, useState } from "react";
import "../styles/Hero.css";
import { Container } from "react-bootstrap";
import BlogNavbar from "./BlogNavbar";
import Search from "./Search";
import { useLocation, useParams } from "react-router-dom";
import { Grid, Typography, Box, Modal } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { width } from "@mui/system";
import { useSelector } from "react-redux";

function Hero(props) {
  const dynamicStyle = {
    backgroundColor: props.heroBackgroundColor,
  };
  const { postId } = useParams();
  const location = useLocation();
  const blogPosts = useSelector((state) => state.posts.blogPosts);

  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem("currentuser"));
    setCurrentUser(storeduser);
  }, []);

  return (
    <Box id="hero-container" style={dynamicStyle}>
      <Grid
        container
        id="hero-child"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"start"}
        // flexDirection={"column"}
        p={2}
      >
        <Grid item xs={12}>
          <BlogNavbar />
        </Grid>

        <Grid
          item
          xs={12}
          // display={"flex"}
          // justifyContent={"center"}
          // alignItems={"center"}
          // flexDirection={"column"}
          // sx={{ width: "100%", height: "50vh" }}
        >
          <Grid>
            <Grid item>
              <Typography
              id="hearMyMind"
                variant="h4"
                sx={{
                  textWrap: "wrap",
                  textAlign: "center",
                  
                }}
              >
                {props.title}
              </Typography>
            </Grid>
            <Grid item >
              <Typography
                variant="h6"
                sx={{
                  textWrap: "wrap",
                  textAlign: "center",
                }}
              >
                {props.subtitle}
              </Typography>
            </Grid>

            <Grid item>
              {/* <span>---------- or ----------</span> */}
              {/* <Search flag={props.flag} /> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;
