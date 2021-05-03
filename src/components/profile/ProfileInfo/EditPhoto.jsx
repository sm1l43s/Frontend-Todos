import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import { Form } from "react-final-form";
import EditPhotoStyles from "./styles/EditPhotoStyles";

const EditPhoto = ({ handleClose, open, updateProfilePhoto }) => {
  const classes = EditPhotoStyles();

  let [file, setFile] = useState(null);

  let onChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = (values) => {
    updateProfilePhoto(file);
    handleClose(false);
  };

  return (
    <Grid container className={classes.root}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit photos</DialogTitle>
        <DialogContent>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form className={classes.form} onSubmit={handleSubmit}>
                <div>
                  <label>
                    <input
                      type="file"
                      onChange={onChange}
                      className={classes.input}
                      accept="image/jpeg,image/png,image/gif"
                    />
                    <Button
                      variant="outlined"
                      fullWidth
                      color="primary"
                      component="span"
                    >
                      {!file ? "Upload" : file.name}
                    </Button>
                  </label>
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Edit
                </Button>
              </form>
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default EditPhoto;
