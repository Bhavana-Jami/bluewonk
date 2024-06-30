import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { TextField, Box } from "@mui/material";
import { Password } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { initiateLogin } from "../../redux/authentication/authenticationActions";
function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.authentication);
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleLogin = () => {
    if (userData.email === "" || userData.password === "") {
      alert("Please enter details to proceed !");
    } else {
      dispatch(initiateLogin(userData.email, userData.password));
      setUserData({ email: "", password: "" });
    }
  };
  useEffect(() => {
    if (currentUser) {
      navigate("/logout");
    }
  }, [currentUser,navigate]);
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
      <Button onClick={handleLogin}>Login</Button>
    </Box>
  );
}

export default Login;
