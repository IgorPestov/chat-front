import React from "react";
import { Route } from "react-router-dom";
import Dialogs from "./dialogs";
// import Dialog from "./dialog";

const Home: React.FC = () => {
  return (
    <React.Fragment>
        <Route exact path="/chats" component={Dialogs} />
        {/* <Route exact path="/chats" component={Dialog} /> */}
    </React.Fragment>
  );
};
export default Home;
