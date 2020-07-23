import React from "react";
import {Grid, Container, Paper, Typography} from '@material-ui/core'
const Chats: React.FC = () => {
  return (
    <Container>
    <Grid>
      <Typography>
        CHATS
      </Typography>
       <Grid>
       <Grid>
          <Paper>
            dialog 1
          </Paper>
       </Grid>
       <Grid>
          <Paper>
            dialog 2
          </Paper>
       </Grid>
       <Grid>
          <Paper>
            dialog 3
          </Paper>
       </Grid>
       </Grid>
    </Grid>
  </Container>
  );
};

export default Chats;