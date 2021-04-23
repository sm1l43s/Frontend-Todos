import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import EditTask from "./EditTask";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import TaskItemStyles from "./styles/TaskItemStyles";

const TaskItem = ({
  task,
  deleteTask,
  updateTask,
  getNormalDate,
  profileId,
  authIdUser,
}) => {
  const classes = TaskItemStyles();

  const [taskStatus, setTaskStatus] = useState(task.status === "COMPLETED");
  const [openEdit, setOpenEdit] = useState(false);

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const onClickDelete = (e) => {
    e.preventDefault();
    deleteTask(e.currentTarget.value);
  };

  const onChangeTaskStatus = (e) => {
    let status = !taskStatus ? "COMPLETED" : "ACTIVE";
    let updatedTask = {
      title: task.title,
      description: task.description,
      startDate: task.startDate,
      endDate: task.endDate,
      status: status,
    };
    updateTask(e.currentTarget.value, updatedTask);
    setTaskStatus(!taskStatus);
  };

  return (
    <Accordion
      className={
        taskStatus ? `${classes.root} ${classes.bgGreen}` : `${classes.root}`
      }
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-label="Expand"
        aria-controls="additional-actions1-content"
      >
        <FormControlLabel
          aria-label="Acknowledge"
          onClick={(event) => event.stopPropagation()}
          onFocus={(event) => event.stopPropagation()}
          control={
            <Checkbox
              value={task.id}
              checked={taskStatus}
              onChange={onChangeTaskStatus}
              disabled={profileId !== authIdUser}
            />
          }
          label={task.title}
        />
      </AccordionSummary>
      <AccordionDetails>
        <Grid direction="row" container>
          {openEdit && (
            <EditTask
              task={task}
              open={openEdit}
              updateTask={updateTask}
              handleClose={handleCloseEdit}
            />
          )}
          <Grid item xs={10} sm={10}>
            <Typography color="textSecondary">
              <Grid direction="row" container justify="space-betwen">
                <Grid item xs={8} sm={8}>
                  {task.description}
                </Grid>
                <Grid item xs={3} sm={3}>
                  <Grid container direction="column">
                    <Grid item>
                      <Typography variant="subtitle2" color="textSecondary">
                        <Grid container direction="row" alignItems="center">
                          <Grid item>
                            <DateRangeRoundedIcon fontSize="small" />
                          </Grid>
                          <Grid item>
                            {` start date ${
                              getNormalDate(task.startDate).validDate
                            }`}
                          </Grid>
                        </Grid>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2" color="textSecondary">
                        <Grid container direction="row" alignItems="center">
                          <Grid item>
                            <DateRangeRoundedIcon fontSize="small" />
                          </Grid>
                          <Grid item>
                            {` end date ${
                              getNormalDate(task.endDate).validDate
                            }`}
                          </Grid>
                        </Grid>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Typography>
          </Grid>
          {profileId === authIdUser && (
            <Grid item xs={2} sm={2}>
              <Grid
                direction="row"
                container
                alignItems="flex-start"
                justify="flex-end"
              >
                <Grid item>
                  <IconButton
                    aria-label="settings"
                    onClick={handleClickOpenEdit}
                  >
                    <EditIcon
                      className={`${classes.smallIcon} ${classes.green}`}
                    />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    value={task.id}
                    aria-label="delete"
                    onClick={onClickDelete}
                  >
                    <DeleteForeverOutlinedIcon
                      className={`${classes.smallIcon} ${classes.red}`}
                    />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default TaskItem;
