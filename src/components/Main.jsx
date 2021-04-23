import CssBaseline from "@material-ui/core/CssBaseline";
import HeaderContainer from "./header/HeaderContainer";
import NavBarContainer from "./navbar/NavBarContainer";
import { Route } from "react-router-dom";
import DashBoardContainer from "./profile/ProfileContainer";
import UsersContainer from "./users/UsersContainer";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NotificationContainer from "./common/Notification/NotificationContainer";
import AdminPanelContainer from "./adminPanel/AdminPanelContainer";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
}));

const Main = (props) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <HeaderContainer />
      <NavBarContainer />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Route
          path="/dashboard/profile/:userId?"
          render={() => <DashBoardContainer />}
        />
        <Route path="/dashboard/users" render={() => <UsersContainer />} />
        <Route path="/dashboard/admin" render={() => <AdminPanelContainer />} />
      </main>
      <NotificationContainer />
    </>
  );
};

export default Main;
