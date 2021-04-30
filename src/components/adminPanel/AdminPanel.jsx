import {Container, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";
import React, {useState} from "react";
import AdminPanelStyles from "./styles/AdminPanelStyles";
import Grid from "@material-ui/core/Grid";
import UsersTable from "./UsersTable";
import { Pagination } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import EditUsersData from "./EditUsersData";

const AdminPanel = ({
  currentPage,
  pageSize,
  reports,
  users,
  totalCountUsers,
  setCurrentPage,
    setEditUserId,
}) => {
  let classes = AdminPanelStyles();

  let onChangeCurrentPage = (e, value) => {
    setCurrentPage(value);
  };

  let pagesCount = Math.ceil(totalCountUsers / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container direction="column">
        <Grid xs={12} md={12} item>
          <UsersTable users={users} setEditUserId={setEditUserId} />
        </Grid>
      </Grid>
      <Grid item>
        <Pagination
          shape="rounded"
          variant="outlined"
          color="primary"
          count={pages.length}
          onChange={onChangeCurrentPage}
        />
      </Grid>

    </Container>
  );
};

export default AdminPanel;
