import React from "react";
import { connect } from "react-redux";
import Main from "./Main";
import { makeStyles } from "@material-ui/core/styles";
import { compose } from "redux";
import { withAuthRedirectComponent } from "../HOC/withAuthRedirectComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const MainContainer = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Main />
    </div>
  );
};

let mstp = (state) => ({});

export default compose(
  withAuthRedirectComponent,
  connect(mstp, {})
)(MainContainer);
