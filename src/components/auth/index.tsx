import React from "react";
import { Route } from "react-router-dom";
import Signin from "./signin";
import Signup from "./signup";
const Auth: React.FC = (props:any) => {
const { history} = props


  return (
    <React.Fragment>
        <Route history={history} path="/signin" component={Signin} />
        <Route history={history} path="/signup" component={Signup} />
    </React.Fragment>
  );
};
export default Auth;
