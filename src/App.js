import React from "react";
import Auth from "./components/auth";
import Home from "./components/chats/index";
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter,
  withRouter,
} from "react-router-dom";


const App = (props) => {
  const { history } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route history ={history} path={["/signin", "/signup"]} component={Auth} />
        <Route history ={history} path={"/chats"} component={Home} />
        <Redirect from="/" to="/signin" />
      </Switch>
    </BrowserRouter>
  );
};

export default withRouter(App);
