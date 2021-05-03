import { Container } from "@material-ui/core";
import React from "react";
import AdminPanelStyles from "./styles/AdminPanelStyles";
import Grid from "@material-ui/core/Grid";
import UsersTable from "./UsersTable";
import { Pagination } from "@material-ui/lab";

const AdminPanel = ({
  currentPage,
  pageSize,
  reports,
  users,
  totalCountUsers,
  setCurrentPage,
  setEditUser,
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
          <UsersTable users={users} setEditUser={setEditUser} />
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
