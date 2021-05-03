import React, {useEffect} from "react";
import EditUsersData from "./EditUsersData";
import {connect} from "react-redux";

const EditUsersDataContainer = ({open, handleClose, user}) => {
    useEffect(() => {

    }, [open, handleClose, user]);
    return (
        <EditUsersData user={user} open={open} handleClose={handleClose} />
    );
}

let mstp = (state) => ({
    user: state.adminPanel.editUser,
});

export default connect(mstp, {})(EditUsersDataContainer);