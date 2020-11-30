import React from "react";
import { Switch, Route } from "react-router-dom";
import ChatSection from "../components/ChatSection";
import Login from "../components/Login";
import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <ProtectedRoute path="/" component={<ChatSection />} />
    </Switch>
  );
};

export default Routes;
