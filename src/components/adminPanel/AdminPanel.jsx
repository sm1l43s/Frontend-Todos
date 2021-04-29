import { Container } from "@material-ui/core";
import React from "react";
import AdminPanelStyles from "./styles/AdminPanelStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import Paper from "@material-ui/core/Paper";

const AdminPanel = (props) => {
  let classes = AdminPanelStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container direction="column">
        <Grid xs={12} md={12} item>
          <Grid container xs={12} md={12} direction="column">
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <Grid
                  container
                  direction="row"
                  justify="space-around"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography component="h6" variant="h6" color="body1">
                      <b>340</b> Total users
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      <b>12</b> New users
                    </Typography>
                  </Grid>
                  <Grid item>
                    <GroupOutlinedIcon className={classes.largeIcon} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <Grid
                  container
                  direction="row"
                  justify="space-around"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography component="h6" variant="h6" color="body1">
                      <b>340</b> Total Tasks
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      <b>12</b> Completed
                    </Typography>
                  </Grid>
                  <Grid item>
                    <ListAltOutlinedIcon className={classes.largeIcon} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} md={12} item>
          <Paper>
            2
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminPanel;
