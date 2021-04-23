import Button from "@material-ui/core/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import AddTaskStyles from "./styles/AddTaskStyles";

const AddTask = ({ open, handleClose, addTask }) => {
  const classes = AddTaskStyles();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  let onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  let onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  let onChangeStartDate = (e) => {
    setStartDate(e.target.value);
  };

  let onChangeEndDate = (e) => {
    setEndDate(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let task = { title, description, startDate, endDate };
    addTask(task);
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Task</DialogTitle>
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
              Add Task
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

export default AddTask;
