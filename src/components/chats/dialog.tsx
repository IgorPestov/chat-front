import React from "react"
import { Container, Grid, Paper } from "@material-ui/core";
import Panel from "../panel"
const Dialog : React.FC = ( props: any) => {
    return (
        <Container>
        <Grid>
           <Paper>Dialog</Paper>
        </Grid>
        <Panel/>
      </Container>
    )
}
export default Dialog;