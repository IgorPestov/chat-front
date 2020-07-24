import React from "react";
import { Route } from "react-router-dom";
import Dialogs from "./dialogs";
import Dialog from "./dialog";
import Panel from "../panel/index";
const Home: React.FC = (props: any) => {
  const { history } = props;

  return (
    <React.Fragment>
      <Route history={history} exact path="/chats" component={Dialogs} />
      <Route history={history} path="/chats/dialog" component={Dialog} />
      <Route history={history} component={Panel} />
    </React.Fragment>
  );
};
export default Home;
