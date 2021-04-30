import AdminPanel from "./AdminPanel";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getReports, getUsers } from "../../thunks/adminPanelThunks";
import {setCurrentPage, setEditUserId} from "../../actions/adminPanelAction";

const AdminPanelContainer = ({
  currentPage,
  setCurrentPage,
  getUsers,
  getReports,
  pageSize,
  users,
  reports,
  totalCountUsers,
    setEditUserId
}) => {
  useEffect(() => {
    getUsers(currentPage, pageSize);
    getReports();
  }, [currentPage, pageSize]);

  return (
    <AdminPanel
      users={users}
      reports={reports}
      setCurrentPage={setCurrentPage}
      pageSize={pageSize}
      totalCountUsers={totalCountUsers}
      setEditUserId={setEditUserId}
    />
  );
};

let mstp = (state) => ({
  currentPage: state.adminPanel.currentPage,
  pageSize: state.adminPanel.pageSize,
  reports: state.adminPanel.reports,
  users: state.adminPanel.users,
  totalCountUsers: state.adminPanel.totalCountUsers,
});

export default connect(mstp, { getUsers, getReports, setCurrentPage, setEditUserId })(
  AdminPanelContainer
);
