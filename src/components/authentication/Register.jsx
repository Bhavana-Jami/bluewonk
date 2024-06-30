import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { TextField, Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initiateRegister } from "../../redux/authentication/authenticationActions";
function Register() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.authentication);
  console.log(currentUser);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleRegister = () => {
    if (userData.password !== userData.confirmPassword) {
      alert("Passwords don't match!");
    } else {
      dispatch(
        initiateRegister(userData.email, userData.password, userData.username)
      );
      setUserData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/logout");
    }
  }, [currentUser, navigate]);
  return (
    <Box
      autoComplete="off"
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={"1rem"}
    >
      <TextField
        name="username"
        label="Username"
        variant="outlined"
        onChange={onChangeHandler}
      />
      <TextField
        name="email"
        label="Email"
        variant="outlined"
        onChange={onChangeHandler}
      />
      <TextField
        name="password"
        label="Password"
        variant="outlined"
        type="password"
        onChange={onChangeHandler}
      />
      <TextField
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        variant="outlined"
        onChange={onChangeHandler}
      />
      <Button onClick={handleRegister}>Register</Button>
      <Typography>
        Already have an account ? <Link to="/login">Login here.</Link>
      </Typography>
      <Button>Signin with Google</Button>
      <Button>Signin with Facebook</Button>
    </Box>
  );
}

export default Register;
