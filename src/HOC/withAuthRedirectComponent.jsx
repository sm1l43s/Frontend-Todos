import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mstp = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const withAuthRedirectComponent = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={"/signin"} />;
      return <Component {...this.props} />;
    }
  }
  return connect(mstp, {})(RedirectComponent);
};
