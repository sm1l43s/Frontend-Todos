import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mstp = (state) => {
  return {
    roles: state.profile.profile.roles,
  };
};

export const withRoleAdminRedirectComponent = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (this.props.roles.length === 1)
        return <Redirect to={"/dashboard/profile"} />;
      return <Component {...this.props} />;
    }
  }
  return connect(mstp, {})(RedirectComponent);
};
