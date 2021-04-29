import AdminPanel from "./AdminPanel";
import React from "react";
import { connect } from "react-redux";
import {getUsers} from "../../thunks/adminPanelThunks";

const AdminPanelContainer = (props) => {
  props.getUsers(props.currentPage, props.pageSize);

  return <AdminPanel />;
};

let mstp = (state) => ({
  currentPage: state.admin.currentPage,
  pageSize: state.admin.pageSize,
});

export default connect(mstp, {getUsers})(AdminPanelContainer);
