import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom"
import "./index.css";
import App from "./App";
import {createBrowserHistory} from 'history'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});
const history = createBrowserHistory();

ReactDOM.render(
  <ThemeProvider theme = {darkTheme}>
  <BrowserRouter history={history}>
    <App />
  </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
