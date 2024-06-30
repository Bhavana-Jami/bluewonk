import React from "react";
import { Route } from "react-router-dom";
import LoadingToRedirect from "./LoadingToRedirect";
import { useSelector } from "react-redux";

function UserRoute({ children, ...rest }) {
  const currentUser = useSelector((state) => state.authentication);

  return currentUser ? <Route {...rest} /> : <LoadingToRedirect />;
}

export default UserRoute;
