import React, { useEffect, useRef, useState } from "react";
import {
  Nav,
  Container,
  Offcanvas,
  Navbar,
  Button,
  Modal,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { Grid, Typography, Box, TextField } from "@mui/material";
import {
  initiateGoogleSignIn,
  initiateGoogleSignOut,
} from "../redux/signInWithGoogle/signInWithGoogleActions";
import { useDispatch, useSelector } from "react-redux";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "80%", md: 800, lg: 1000 },
  height: { xs: "auto", md: 600 },
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: 24,
  p: 2,
  backdropFilter: "blur(10px) saturate(200%)",
  backgroundColor: "rgba(0, 0, 0, 0.75)",
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  color: "white", // Set font color to white
};

function BlogNavbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tech", path: "/tech" },
    { name: "Love", path: "/love" },
    { name: "Spiritual", path: "/spiritual" },
    { name: "Travel", path: "/travel" },
  ];

  const dispatch = useDispatch();
  const blogPosts = useSelector((state) => state.posts.blogPosts);
  const currentUser = useSelector(
    (state) => state.signInWithGoogle.currentUser
  );

  // To close offcanvas when clicked on the backdrop
  const offCanvasRef = useRef();
  const closeOffCanvas = () => offCanvasRef.current.backdrop.click();
  const [user, setUser] = useState();

  const handleGoogleSignIn = () => {
    dispatch(initiateGoogleSignIn());
  };

  const handleGoogleSignOut = () => {
    dispatch(initiateGoogleSignOut());
    localStorage.removeItem("currentuser");
    setUser(null); // Update user state locally
  };

  // For the modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchResults = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (open && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [open]);

  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="ps-4 pe-0 mb-3 mt-2"
          id="navbar"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              bluewonk
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  bluewonk
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 align-items-start">
                  {navLinks.map((link, key) => (
                    <Nav.Item key={key} className="fs-5 p-2">
                      <Nav.Link
                        as={NavLink}
                        to={link.path}
                        onClick={closeOffCanvas}
                      >
                        {link.name}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
                <Nav
                  className="justify-content-end flex-grow-1 align-items-center"
                  id="right-nav"
                >
                  <Button
                    variant="outline-success"
                    className="me-1"
                    onClick={handleOpen}
                  >
                    Search
                  </Button>
                  {currentUser ? (
                    <>
                      <Typography sx={{ display: user ? "block" : "none" }}>
                        {currentUser?.displayName}
                      </Typography>
                      <Button onClick={handleGoogleSignOut}>Logout</Button>
                    </>
                  ) : (
                    <Button
                      variant="outline-success"
                      onClick={handleGoogleSignIn}
                    >
                      Login
                    </Button>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>

          <Modal
            show={open}
            onHide={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            BackdropProps={{
              onClick: (e) => {
                e.stopPropagation();
                handleClose();
              },
            }}
          >
            <Box sx={style}>
              <Grid
                container
                display="flex"
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={12} md={8}>
                  <TextField
                    inputRef={searchInputRef}
                    id="outlined-basic"
                    label="Search a post"
                    variant="outlined"
                    value={searchTerm}
                    type="search"
                    onChange={handleSearch}
                    fullWidth
                    InputLabelProps={{
                      style: { color: "white" }, // Label color white
                    }}
                    InputProps={{
                      style: { color: "white" }, // Input text color white
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box
                    sx={{
                      maxHeight: 400,
                      overflowY: "auto",
                      width: "100%",
                      mt: 2,
                      p: 1,
                    }}
                  >
                    {searchResults.map((result) => (
                      <Link
                        to={`/posts/${result.id}`}
                        style={{ textDecoration: "none", display: "block" }}
                      >
                        <Typography
                          key={result.id}
                          sx={{
                            typography: {
                              sm: "body1",
                              xs: "body2",
                              mt: 2,
                              mb: 2,
                              md: "h6",
                            },
                            color: "white",
                          }}
                        >
                          {result.title.slice(0, 25)}
                        </Typography>
                      </Link>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Modal>
        </Navbar>
      ))}
    </>
  );
}

export default BlogNavbar;
