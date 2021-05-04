import { Container } from "@material-ui/core";
import React from "react";
import AdminPanelStyles from "./styles/AdminPanelStyles";
import Grid from "@material-ui/core/Grid";
import UsersTable from "./UsersTable";
import { Pagination } from "@material-ui/lab";
import AdminFilterContainer from "./AdminPanelFIlter/AdminFilterContainer";

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
      <Grid container direction="row" justify="center">
        <Grid xs={8} md={8} item>
          <UsersTable users={users} setEditUser={setEditUser} />
        </Grid>
        <Grid item xs={4} md={4}>
          <AdminFilterContainer />
        </Grid>
        <Grid xs={12} md={12} item>
          <Pagination
            shape="rounded"
            variant="outlined"
            color="primary"
            count={pages.length}
            onChange={onChangeCurrentPage}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminPanel;
