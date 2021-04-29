import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import EditTaskStyles from "./styles/EditTaskStyles";

const EditTask = ({ task, open, handleClose, updateTask }) => {
  let classes = EditTaskStyles();

  let [title, setTiltle] = useState(task.title);
  let [description, setDescription] = useState(task.description);
  let [startDate, setStartDate] = useState(task.startDate);
  let [endDate, setEndDate] = useState(task.endDate);
  let [status] = useState(task.status);

  const onChangeTitle = (e) => {
    setTiltle(e.currentTarget.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.currentTarget.value);
  };

  const onChangeStartDate = (e) => {
    setStartDate(e.currentTarget.value);
  };

  const onChangeEndDate = (e) => {
    setEndDate(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let newTask = {
      title,
      description,
      startDate,
      endDate,
      status,
    };
    updateTask(task.id, newTask);
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Task</DialogTitle>
        <DialogContent>
          <form className={classes.form} onSubmit={onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="title"
                  label="Title task"
                  name="title"
                  autoComplete="title"
                  value={title}
                  onChange={onChangeTitle}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="description"
                  label="Description Task"
                  name="description"
                  autoComplete="description"
                  value={description}
                  onChange={onChangeDescription}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="startDate"
                  label="Start date"
                  type="date"
                  fullWidth
                  variant="outlined"
                  value={startDate}
                  onChange={onChangeStartDate}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="endDate"
                  label="End date"
                  type="date"
                  fullWidth
                  variant="outlined"
                  value={endDate}
                  onChange={onChangeEndDate}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              className={classes.submit}
            >
              Edit Task
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

export default EditTask;
