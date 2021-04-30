import EditUsersData from "./EditUsersData";
import React, {useState} from "react";
import {connect} from "react-redux";

const EditUsersDataContainer = ({open, handleClose, user}) => {
    return (
        <EditUsersData user={user} open={open} handleClose={handleClose} />
    );
}

let mstp = (state) => ({
    user: state.adminPanel.editUser,
});

export default connect(mstp, {})(EditUsersDataContainer);