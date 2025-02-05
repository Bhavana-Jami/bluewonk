"use client";

import { useState } from "react";
// import Image from 'next/image'
// import Link from 'next/link'

import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Snackbar,
  Tab,
  Tabs,
  TextField,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import {
  Share,
  Favorite,
  Comment,
  KeyboardArrowDown,
  MoreHoriz,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
// import img from '.'
// Theme configuration
const theme = createTheme({
  palette: {
    primary: {
      main: "#8B5CF6",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    subtitle1: {
      fontSize: "1.1rem",
      color: "#666",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "20px",
        },
      },
    },
  },
});

// Sample data - replace with your actual data
const post = {
  title: "For Everyone, With Love",
  subtitle: "Finding Inner Peace and Joy This Season",
  date: "DEC 25, 2024",
  author: {
    name: "MERISA",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  image: "/placeholder.svg?height=400&width=800",
  content: `Hey Love,

First things first, I want to acknowledge that this time of year can stir up all kinds of emotions. For some, it's joyful—full of festive lights, laughter, and love. For others, it might bring a sense of longing, loneliness, or even dread. And for many of us, it's a mix of it all. Wherever you find yourself, this message is for you: You belong in this season just as you are.`,
  likes: 1,
  comments: 0,
};

const relatedPosts = [
  {
    id: "1",
    title: "Have You Made Time for Hobbies Recently?",
    subtitle: "Remember, They're A Source Of Joy, Not Income",
    date: "OCT 9, 2024",
    author: "MERISA",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "2",
    title:
      "Sorry Christmas Chaos, You Didn't Make The List: This Year I'm The Damn Gift 🎁",
    subtitle: "Rested, Radiant, and Wrapped in Radical Self-Love",
    date: "DEC 19, 2024",
    author: "MERISA",
    image: "/placeholder.svg?height=200&width=400",
  },
];

export default function BlogPost() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [comment, setComment] = useState("");

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setSnackbarOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        {/* Post Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle1" gutterBottom>
            {post.date}
          </Typography>
          <Typography variant="h1" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {post.subtitle}
          </Typography>

          {/* Removed Author Section */}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 4,
            py:2,
            borderTop: "1px solid rgba(111, 102, 104, 0.2)",
            borderBottom: "1px solid rgba(111, 102, 104, 0.2)",
          }}
        >
          <Button
            startIcon={<Favorite />}
            sx={{
              border: "1px solid rgba(111, 102, 104, 0.2)",
              bgcolor: liked ? "rgba(255, 192, 203, 0.1)" : "transparent",
              color: liked ? "error.main" : "text.secondary",
              "&:hover": { bgcolor: "rgba(255, 192, 203, 0.2)" },
            }}
            onClick={() => setLiked(!liked)}
          >
            1
          </Button>
          <Button
            startIcon={<Comment />}
            sx={{
              color: "text.secondary",
              border: "1px solid rgba(111, 102, 104, 0.2)",
            }}
          >
            1
          </Button>
          <Button
            sx={{
              color: "text.secondary",
              border: "1px solid rgba(111, 102, 104, 0.2)",
            }}
          >
            Share
          </Button>
        </Box>
        {/* Featured Image */}
        <Paper
          elevation={0}
          sx={{
            position: "relative",
            height: 400,
            mb: 4,
            overflow: "hidden",
            borderRadius: 2,
          }}
        >
          <img
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </Paper>

        {/* Post Content */}
        <Typography
          variant="body1"
          sx={{ mb: 4, fontSize: "1.2rem", lineHeight: 1.8 }}
        >
          {post.content}
        </Typography>

        {/* Action Buttons */}

        <Divider sx={{ my: 4 }} />

        {/* Comments Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" gutterBottom>
            Discussion about this post
          </Typography>

          <Paper
            elevation={0}
            sx={{ p: 2, mb: 3, bgcolor: "#f5f5f5", borderRadius: 2 }}
          >
            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary">
              Post Comment
            </Button>
          </Paper>

          {/* Sample Comments */}
          {[1, 2].map((id) => (
            <Paper
              key={id}
              elevation={0}
              sx={{ p: 2, mb: 2, bgcolor: "#f5f5f5", borderRadius: 2 }}
            >
              <Box sx={{ display: "flex", gap: 2 }}>
                <Avatar src={`/placeholder.svg?height=40&width=40`} />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    User Name
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    2 hours ago
                  </Typography>
                  <Typography>
                    This is a sample comment on the blog post.
                  </Typography>
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Related Posts */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" gutterBottom>
            More like this
          </Typography>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            {relatedPosts.map((post) => (
              <Grid item xs={12} md={6} key={post.id}>
                <Paper
                  elevation={0}
                  component={Link}
                  href={`/blog/${post.id}`}
                  sx={{
                    display: "block",
                    textDecoration: "none",
                    color: "inherit",
                    borderRadius: 2,
                    overflow: "hidden",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Box sx={{ position: "relative", height: 200 }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <Box sx={{ p: 2 }}>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      gutterBottom
                    >
                      {post.date} · {post.author}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.subtitle}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="text"
              endIcon={<KeyboardArrowDown />}
              sx={{ borderRadius: 20 }}
            >
              Load more
            </Button>
          </Box>
        </Box>

        {/* Subscribe Form */}
        <Box
          sx={{
            bgcolor: "primary.main",
            color: "white",
            py: 8,
            px: 4,
            textAlign: "center",
            borderRadius: 2,
            mb: 4,
          }}
        >
          <Typography variant="h2" gutterBottom sx={{ color: "inherit" }}>
            Ready for more?
          </Typography>

          <Box
            component="form"
            sx={{
              display: "flex",
              gap: 1,
              maxWidth: 500,
              mx: "auto",
              mt: 4,
            }}
          >
            <TextField
              placeholder="Enter your email"
              variant="outlined"
              fullWidth
              sx={{
                bgcolor: "white",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 20,
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "white",
                color: "primary.main",
                "&:hover": {
                  bgcolor: "grey.100",
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>

        {/* Snackbar */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={2000}
          onClose={() => setSnackbarOpen(false)}
          message="Link copied to clipboard"
        />
      </Container>
    </ThemeProvider>
  );
}
