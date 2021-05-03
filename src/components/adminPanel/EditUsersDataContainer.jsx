import React from "react";
import EditUsersData from "./EditUsersData";
import { connect } from "react-redux";
import { updateUsers } from "../../thunks/adminPanelThunks";

const EditUsersDataContainer = ({
  open,
  handleClose,
  user,
  updateUsers,
  isUpdated,
}) => {
  return (
    <EditUsersData
      user={user}
      open={open}
      handleClose={handleClose}
      updateUsers={updateUsers}
      isUpdated={isUpdated}
    />
  );
};

let mstp = (state) => ({
  user: state.adminPanel.editUser,
  isUpdated: state.adminPanel.isUpdated,
});

export default connect(mstp, { updateUsers })(EditUsersDataContainer);
