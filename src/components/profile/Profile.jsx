import React from "react";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TaskContainer from "./Task/TaskContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import ProfileStyles from "./styles/ProfileStyles";
import TaskFilterContainer from "./TaskFilter/TaskFilterContainer";

const Profile = ({ profile }) => {
  let classes = ProfileStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid direction="row" justify="space-between" container>
        <Grid item xs={9} md={9}>
          <TaskContainer />
        </Grid>
        <Grid item xs={3} md={3}>
          <Grid direction="column" justify="space-between" container>
            <Grid item>
              <ProfileInfoContainer profile={profile} />
            </Grid>
            <Grid item>
              <TaskFilterContainer />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
