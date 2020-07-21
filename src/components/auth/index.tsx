import React from "react";
import { Route } from "react-router-dom";
import Signin from "./signin";
import Signup from "./signup";
const Auth: React.FC = () => {
  return (
    <React.Fragment>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
    </React.Fragment>
  );
};
export default Auth;
