import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Paper,
} from "@material-ui/core";
import Panel from "../panel";

const useStyles = makeStyles((theme) => ({
  rootDialogs: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  ListItem: {
    borderRadius: "20",
    fontSize: "8",
  },
}));
const Chats: React.FC = (props :any , event) => {
  const classes = useStyles();

  const choiceDialog = () => {
    props.history.push('/chats/dialog')
  } 
  return (
    <React.Fragment>
      <Paper className={classes.rootDialogs}>
        <List className={classes.rootDialogs}>
          <ListItem className={classes.ListItem} alignItems="flex-start" onClick={choiceDialog}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Ali Connors
                  </Typography>
                  {"  I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem className={classes.ListItem} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {"Alex Jennifer \n"}
                  </Typography>
                  {" \n Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem className={classes.ListItem} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Sandra Adams
                  </Typography>
                  {"  Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Paper>
      <Panel/>
    </React.Fragment>
  );
};

export default Chats;
