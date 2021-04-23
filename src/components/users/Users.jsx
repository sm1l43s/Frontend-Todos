import React from "react";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Pagination } from "@material-ui/lab";
import UserItem from "./UserItem";
import UsersStyles from "./styles/UsersStyles";
import FilterUsersContainer from "./FilterUsers/FilterUsersContainer";

const Users = (props) => {
  let classes = UsersStyles();

  let pagesCount = Math.ceil(props.totalElements / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let usersElement = props.users.map((user) => (
    <UserItem
      key={user.id}
      user={user}
      arrayBufferToBase64={props.arrayBufferToBase64}
      getNormalDate={props.getNormalDate}
      getShortText={props.getShortText}
    />
  ));

  let onChangeCurrentPage = (e, value) => {
    props.setCurrentPage(value);
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Grid container direction="row" justify="space-between">
            <Grid item xs={9} md={9}>
              <Grid container direction="row">
                {usersElement}
              </Grid>
            </Grid>
            <Grid item xs={3} md={3}>
              <FilterUsersContainer />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Pagination
            shape="rounded"
            variant="outlined"
            color="primary"
            className={classes.center}
            count={pages.length}
            onChange={onChangeCurrentPage}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Users;
