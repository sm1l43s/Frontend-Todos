import React, { useEffect } from "react";
import AdminPanel from "./AdminPanel";
import { connect } from "react-redux";
import { getReports, getUsers } from "../../thunks/adminPanelThunks";
import {
  setCurrentPage,
  setEditUser,
  setIsUpdated,
} from "../../actions/adminPanelAction";
import { compose } from "redux";
import { withRoleAdminRedirectComponent } from "../../HOC/withRoleAdminRedirectComponent";

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
  searchWord,
  orderType,
  orderFields,
}) => {
  useEffect(() => {
    getUsers(currentPage, pageSize, orderType, orderFields, searchWord);
    getReports();
  }, [
    currentPage,
    pageSize,
    getUsers,
    getReports,
    isUpdated,
    orderType,
    orderFields,
    searchWord,
  ]);

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
  searchWord: state.adminPanel.searchWord,
  orderType: state.adminPanel.orderType,
  orderFields: state.adminPanel.orderFields,
});

export default compose(
  withRoleAdminRedirectComponent,
  connect(mstp, {
    getUsers,
    getReports,
    setCurrentPage,
    setEditUser,
    setIsUpdated,
  })
)(AdminPanelContainer);
