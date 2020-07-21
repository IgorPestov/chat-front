import React from "react";
import { Route } from "react-router-dom";
import Chats from "./chats";
import Dialog from "./dialog";

const Home: React.FC = () => {
  return (
    <React.Fragment>
        <Route exact path="/chats" component={Chats} />
        <Route exact path="/chats/dialog" component={Dialog} />
    </React.Fragment>
  );
};
export default Home;
