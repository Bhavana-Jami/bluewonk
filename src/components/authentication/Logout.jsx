import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { initiateLogout } from "../../redux/authentication/authenticationActions";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    if (currentUser) {
      dispatch(initiateLogout());
    }
  };
  const { currentUser } = useSelector((state) => state.authentication);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
      console.log("user logged out");
    }
  }, [currentUser]);

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
