import {Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";

const onSubmit = () => {
};

const EditUsersData = ({open, handleClose, user}) => {

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [status, setStatus] = useState(user.status);
    const [checkedAdmin, setCheckedAdmin] = useState(true);
    const [checkedUser, setCheckedUser] = useState(false);

    let onChangeFirstName = (e) => {
        setFirstName(e.target.value);
    };

    let onChangeLastName = (e) => {
        setLastName(e.target.value);
    };

    let onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    let onChangeStatus = (e) => {
        setStatus(e.target.value)
    }

    let handleChangeCheckedAdmin = (e) => {
        setCheckedAdmin(e.target.checked);
    }

    let handleChangeCheckedUser = (e) => {
        setCheckedUser(e.target.checked);
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Edit profile {user.lastName + ' ' + user.firstName}</DialogTitle>
                <DialogContent>
                    <form onSubmit={onSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    value={firstName}
                                    onChange={onChangeFirstName}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    value={lastName}
                                    onChange={onChangeLastName}
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={onChangeEmail}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">User status</FormLabel>
                                    <RadioGroup
                                        aria-label="status"
                                        name="status"
                                        value={status}
                                        onChange={onChangeStatus}
                                        // className={classes.radioGroup}
                                    >
                                        <FormControlLabel
                                            value="ACTIVE"
                                            control={<Radio color="primary" />}
                                            label="Active"
                                        />
                                        <FormControlLabel
                                            value="BANNED"
                                            control={<Radio color="primary" />}
                                            label="Banned"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">User roles</FormLabel>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={checkedAdmin}
                                                onChange={handleChangeCheckedAdmin}
                                                name="ROLE_ADMIN"
                                                color="primary"
                                            />
                                        }
                                        label="role_admin"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={checkedUser}
                                                onChange={handleChangeCheckedUser}
                                                name="ROLE_ADMIN"
                                                color="primary"
                                            />
                                        }
                                        label="role_user"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
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