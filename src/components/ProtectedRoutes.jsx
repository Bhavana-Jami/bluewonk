import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoutes = () => {
  const currentUser = useSelector(
    (state) => state.signInWithGoogle.currentUser
  );
 


  return currentUser && currentUser?.email == "bhavanajami111@gmail.com" ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default ProtectedRoutes;
