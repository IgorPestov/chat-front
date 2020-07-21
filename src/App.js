import React from "react";
import Auth from "./components/auth";
import Home from "./components/chats/index";
import { Route, Redirect, Switch ,BrowserRouter} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path= {['/signin', '/signup']} component={Auth}/>
        <Route exact path ={['/chats', '/chats/dialog']} component={Home}/>
        <Redirect from="/" to="/signin" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
