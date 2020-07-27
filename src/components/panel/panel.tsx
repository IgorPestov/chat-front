import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  BottomNavigationAction,
  Grid,
  BottomNavigation,
} from "@material-ui/core";
import {
  PermContactCalendar,
  ForumRounded,
  SettingsRounded,
  Person,
} from "@material-ui/icons";
import socket from "../../core/socket.io";

const useStyles = makeStyles({
  rootPanel: {
    width: "100%",
    position: "fixed",
    bottom: "0",
    left: "0",
    fontSize: "2",
  },
});

const Panel: React.FC = (props: any) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  // socket.on("connects", (msg: string) => {
  //   console.log("user is connect", msg);
  // });
  
  // socket.on("addMsg", (data: any) => {
  //   socket.emit("sendMsg")

  //   console.log(data);
  // });

  return (
    <BottomNavigation
      value={value}
     
      onChange={(event, newValue) => {

        switch (newValue) {
          case 0:
            return props.history.push("/chats");
          case 1:
            return props.history.push("/chats");
          case 2:
            return props.history.push("/chats");
          case 3:
            return props.history.push("/chats");
        }
        setValue(newValue);
      }}
      showLabels
      className={classes.rootPanel}
    >
      <BottomNavigationAction label="Contacts" icon={<PermContactCalendar />} />
      <BottomNavigationAction label="Chats" icon={<ForumRounded />} />
      <BottomNavigationAction label="Profile" icon={<Person />} />
      <BottomNavigationAction label="Setings" icon={<SettingsRounded />} />
    </BottomNavigation>
  );
};
export default Panel;
