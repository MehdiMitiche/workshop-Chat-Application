import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ path, component }) => {
  if (!localStorage.getItem("username")) return <Redirect to="login" />;
  return <Route path={path}>{component}</Route>;
};

export default ProtectedRoute;
