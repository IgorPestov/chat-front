import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Signin from "../src/components/auth/signin/index";
import Signup from "./components/auth/signup";
import mainPage from "./components/mainPage/mainPage";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
       <Route path='/signin' component={Signin}/>
       <Route path='/signup' component={Signup}/>
       <Route path='/profile' component={mainPage}/>
       <Redirect from="/" to="/signin" />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
