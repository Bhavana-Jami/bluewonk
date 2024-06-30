import {
  TextField,
  Button,
  Box,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  initiateCreatePost,
  initiateFetchingPost,
  intiateUpdatingPost,
} from "../redux/posts/postsActions";
import { useNavigate, useParams } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import "../styles/CreatePost.css";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useSelector } from "react-redux";
function CreatePost() {
  const { postId } = useParams();
  console.log(postId);
  const [postDetails, setPostDetails] = useState({
    title: "",
    content: "",
    authorId: "",
    authorName: "",
    createdAt: "",
    updatedAt: "",
    tags: "",
    likes: 0,
    shares: 0,
    comments: 0,
    category: "",
    image: img1,
    subtitle: "",
    dateCreated: "",
  });

  const inputDefaults = [
    {
      label: "Enter title",
      name: "title",
      value: postDetails.title,
      onchange: (e) => handlePostDetails(e),
      rows: 1,
      error: "",
    },
    {
      label: "Enter subtitle",
      name: "subtitle",
      value: postDetails.subtitle,
      onchange: (e) => handlePostDetails(e),
      rows: 2,
      error: "",
    },
    {
      label: "Enter content here",
      name: "content",
      value: postDetails.content,
      onchange: (e) => handlePostDetails(e),
      rows: 6,
      error: "",
    },
    {
      label: "Enter tags",
      name: "tags",
      value: postDetails.tags,
      onchange: (e) => handlePostDetails(e),
      rows: 1,
      error: "",
    },
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(
    (state) => state.signInWithGoogle.currentUser
  );
  const handlePostDetails = (e) => {
    const { name, value } = e.target;
    setPostDetails((prevPostDetails) => ({
      ...prevPostDetails,
      [name]: value,
    }));
  };

  const handleClick = () => {
    if (
      postDetails.title !== "" &&
      postDetails.content !== "" &&
      postDetails.tags !== "" &&
      postDetails.subtitle !== ""
    ) {
      navigate("/");
      if (postId) {
        dispatch(intiateUpdatingPost(postId, postDetails));
      } else {
        dispatch(initiateCreatePost(postDetails));
      }
    }
    if (postDetails.title == "") {
      alert("Please enter the title");
    } else if (postDetails.subtitle == "") {
      alert("Please enter the subtitle");
    } else if (postDetails.content == "") {
      alert("Please enter the content");
    } else if (postDetails.tags == "") {
      alert("Please enter the tags");
    }
  };
  // useEffect(() => {
  //   dispatch(intiateUpdatingPost(postId,postDetails));

  // }, [handleClick]);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, "posts", postId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPostDetails(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [postId]);

  const handleDropDown = (event) => {
    // setCategory(event.target.value);
    setPostDetails({ ...postDetails, category: event.target.value });
  };

  console.log(postDetails.category);
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="create-post-container"
    >
      <Grid
        container
        spacing={1}
        sx={{
          width: { xs: "70%", md: "50%" },
          textAlign: "center",
          padding: "0 8px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2%",
            }}
            className="custom-grid-item"
          >
            {currentUser
              ? currentUser.email == "bhavanajami111@gmail.com"
                ? "Edit Post"
                : "Create Post"
              : null}
          </Typography>
        </Grid>
        {inputDefaults.map((input) => (
          <Grid item xs={12} key={input.name}>
            <TextField
              id="outlined-basic"
              label={input.label}
              variant="outlined"
              name={input.name}
              value={input.value}
              onChange={input.onchange}
              multiline
              rows={input.rows}
              fullWidth
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={postDetails.category}
                  label="Category"
                  onChange={handleDropDown}
                >
                  <MenuItem value={"Tech"}>Tech</MenuItem>
                  <MenuItem value={"Love"}>Love</MenuItem>
                  <MenuItem value={"Spiritual"}>Spiritual</MenuItem>
                  <MenuItem value={"Travel"}>Travel</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                variant="contained"
                onClick={handleClick}
                fullWidth
                sx={{ p: "0.9rem" }}
              >
                {currentUser
                  ? currentUser.email == "bhavanajami111@gmail.com"
                    ? "Update"
                    : "Create"
                  : null}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CreatePost;
