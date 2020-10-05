import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Signin from "./components/auth/signin";
import Signup from "./components/auth/signup";
import mainPage from "./components/mainPage/mainPage";
import store from './redux/store'
import { Provider } from "react-redux";
function App(props: any) {
  const { history } = props

  const authorization = window.localStorage.getItem('token')

  return (

    <BrowserRouter>
      <div className="App">
        <Provider store={store}>
          <Switch>
            {!authorization ? <Route history={history} path='/signin' component={Signin} /> : <Redirect from="/signin" to="/home" />}
            {!authorization ? <Route history={history} path='/signup' component={Signup} /> : <Redirect from="/signin" to="/home" />}
            <Route history={history} path='/home' component={mainPage} />
            <Redirect from="/" to="/signin" />
          </Switch>
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
