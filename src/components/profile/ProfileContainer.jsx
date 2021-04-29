import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirectComponent } from "../../HOC/withAuthRedirectComponent";
import { getProfile } from "../../thunks/profileThunks.js";
import { clearTasks } from "../../actions/profileActions";

const ProfileContainer = (props) => {
  let userId = props.match.params.userId;

  useEffect(() => {
    if (!userId) userId = props.authIdUser;
    if (!userId) props.history.push("/signin");
    props.clearTasks();
    props.getProfile(
      userId,
      props.currentPage,
      props.pageSize,
      props.filterStatus,
      props.typeOrder,
      props.orderFields,
      props.searchWord
    );
  }, [
    userId,
    props.totalTaskCount,
    props.completedTask,
    props.pageSize,
    props.filterStatus,
    props.currentPage,
    props.typeOrder,
    props.orderFields,
    props.searchWord,
  ]);

  if (props.isFetching || props.profile == null) return <Preloader />;

  return <Profile profile={props.profile} />;
};

let mstp = (state) => ({
  isFetching: state.profile.profileIsFetching,
  filterStatus: state.commonElements.filterStatus,
  typeOrder: state.commonElements.typeOrder,
  orderFields: state.commonElements.orderFields,
  searchWord: state.commonElements.searchWord,
  authIdUser: state.auth.user.id,
  profile: state.profile.profile,
  totalTaskCount: state.profile.totalTaskCount,
  completedTask: state.profile.completedTask,
  currentPage: state.profile.currentPage,
  pageSize: state.profile.pageSize,
});

export default compose(
  withRouter,
  withAuthRedirectComponent,
  connect(mstp, { getProfile, clearTasks })
)(ProfileContainer);
