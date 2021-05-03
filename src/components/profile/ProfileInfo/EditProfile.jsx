import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import EditProfileStyles from "./styles/EditProfileStyles";

const EditProfile = ({ profile, open, handleClose, updateProfile }) => {
  const classes = EditProfileStyles();

  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [email, setEmail] = useState(profile.email);
  const [aboutMe, setAboutMe] = useState(profile.aboutMe);

  let onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  let onChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  let onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  let onChangeAboutMe = (e) => {
    setAboutMe(e.target.value);
  };

  const onSubmit = (e) => {
    let data = { email, firstName, lastName, aboutMe };
    updateProfile(data);
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit profile</DialogTitle>
        <DialogContent>
          <form className={classes.form} onSubmit={onSubmit}>
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
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="aboutMe"
                  label="About Me"
                  name="aboutMe"
                  autoComplete="aboutMe"
                  value={aboutMe}
                  onChange={onChangeAboutMe}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              className={classes.submit}
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
};

export default EditProfile;
