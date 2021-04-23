import AdminPanel from "./AdminPanel";
import React from "react";
import { connect } from "react-redux";

const AdminPanelContainer = (props) => {
  return <AdminPanel />;
};

let mstp = (state) => ({});

export default connect(mstp, {})(AdminPanelContainer);
