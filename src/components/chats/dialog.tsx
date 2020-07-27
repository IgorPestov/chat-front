import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Panel from "../panel";
const useStyles = makeStyles((theme) => ({
  rootDialog: {
    position: "absolute",
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
  Partner: {
     height: "100%",
     minHeight: "25%",
     textAlign: "right",
  },
  Auhtor: {

  },
}));
const Auhtor = {
  name: "vasya ",
  msg: " privet!",
  time: "22:23:45",
};
const Partner = {
  name: "kolya ",
  msg: " poka!1!!!",
  time: "22:25:12",
};
const Dialog: React.FC = (props: any) => {
  const classes = useStyles();
  return (
    <Container className={classes.rootDialog}>
      <Paper>
        <Grid>
          <Grid>
            <Paper className={classes.Auhtor}>
              {Auhtor.name}
              {Auhtor.msg}
              {Auhtor.time}
            </Paper>
          </Grid>
          <Grid>
            <Paper className={classes.Partner}>
              {Partner.name}
              {Partner.msg}
              {Partner.time}
            </Paper>
          </Grid>
        </Grid>
      </Paper>
      <Panel />
    </Container>
  );
};
export default Dialog;
