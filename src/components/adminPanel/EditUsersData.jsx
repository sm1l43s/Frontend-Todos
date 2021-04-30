import {Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";

const onSubmit = () => {
};

const EditUsersData = ({open, handleClose, user}) => {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Edit profile {user.lastName}</DialogTitle>
                <DialogContent>
                    <form onSubmit={onSubmit}>
                        <Button
                            type="submit"
                            variant="outlined"
                            color="primary"
                        >
                            Edit profile
                        </Button>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary" variant="outlined">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditUsersData;