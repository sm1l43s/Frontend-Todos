import React, { useEffect } from "react";
import AdminPanel from "./AdminPanel";
import { connect } from "react-redux";
import { getReports, getUsers } from "../../thunks/adminPanelThunks";
import {
  setCurrentPage,
  setEditUser,
  setIsUpdated,
} from "../../actions/adminPanelAction";

const AdminPanelContainer = ({
  currentPage,
  setCurrentPage,
  getUsers,
  getReports,
  pageSize,
  users,
  reports,
  totalCountUsers,
  setEditUser,
  isUpdated,
  setIsUpdated,
}) => {
  useEffect(() => {
    getUsers(currentPage, pageSize);
    getReports();
  }, [currentPage, pageSize, getUsers, getReports, isUpdated]);

  return (
    <AdminPanel
      users={users}
      reports={reports}
      setCurrentPage={setCurrentPage}
      pageSize={pageSize}
      totalCountUsers={totalCountUsers}
      setEditUser={setEditUser}
    />
  );
};

let mstp = (state) => ({
  currentPage: state.adminPanel.currentPage,
  pageSize: state.adminPanel.pageSize,
  reports: state.adminPanel.reports,
  users: state.adminPanel.users,
  totalCountUsers: state.adminPanel.totalCountUsers,
  isUpdated: state.adminPanel.isUpdated,
});

export default connect(mstp, {
  getUsers,
  getReports,
  setCurrentPage,
  setEditUser,
  setIsUpdated,
})(AdminPanelContainer);
