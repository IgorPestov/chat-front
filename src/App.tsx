import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Signin from "./components/auth/signin";
import Signup from "./components/auth/signup";
import mainPage from "./components/mainPage/mainPage";
import store from './redux/store'
import { Provider } from "react-redux";
import Dialogs from "./components/dialogs";
import Setting from "./components/setting";
function App(props: any) {
  const { history } = props
  return (

    <BrowserRouter>
      <div className="App">
        <Provider store={store}>
          <Switch>
            <Route history={history} path='/signin' component={Signin} />
            <Route history={history} path='/signup' component={Signup} />
            <Route history={history} path='/main' component={mainPage} />

            <Redirect from="/" to="/signin" />
          </Switch>
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
