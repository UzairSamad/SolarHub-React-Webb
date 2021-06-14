import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Page2 from "../Container/Page2/Page2";
import HomePage from "./../Container/HomePage/HomePage";
import AdminLogin from "./../Container/AdminLogin/AdminLogin";

const Routes = () => {
  const userId = localStorage.getItem("userId");

  return (
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + "/"} component={HomePage} />
      <Route
        exact
        path="/login"
        render={(props) => <AdminLogin {...props} />}
      />
      <Route
        render={() => {
          return <h1 style={{ textAlign: "center" }}>Page Not Found</h1>;
        }}
      />
    </Switch>
  );
};

export default Routes;
