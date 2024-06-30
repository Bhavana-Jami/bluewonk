import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "../styles/Search.css";
import { Container, Form, InputGroup } from "react-bootstrap";
import { Grid, Typography, Box, Modal } from "@mui/material";
import { Search } from "react-bootstrap-icons";
import { initiateFetchingPost } from "../redux/posts/postsActions";
import { useDispatch, useSelector } from "react-redux";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Searchbar(props) {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    if (blogPosts?.length === 0) {
      dispatch(initiateFetchingPost());
    }
  }, []);
  const blogPosts = useSelector((state) => state.posts.blogPosts);
  console.log(blogPosts.filter((post) => post.title === searchTerm));
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-3 w-25">
      <InputGroup
        className={props.flag ? "mb-3" : ""}
        style={{ display: props.flag ? "flex" : "none" }}
      >
        <InputGroup.Text id="basic-addon1">
          <Search />
        </InputGroup.Text>
        <Form.Control
          type="button"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onClick={handleOpen}
        />
      </InputGroup>
      <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    </Container>
  );
}

export default Searchbar;
