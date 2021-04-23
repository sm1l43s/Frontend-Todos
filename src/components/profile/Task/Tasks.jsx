import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Pagination } from "@material-ui/lab";
import Preloader from "../../common/Preloader/Preloader";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import CardActions from "@material-ui/core/CardActions";
import AddTask from "./AddTask";
import TaskStyles from "./styles/TaskStyles";

const Tasks = (props) => {
  let classes = TaskStyles();

  const [open, setOpen] = useState(false);

  let pagesCount = Math.ceil(props.totalTaskCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let tasksElement = props.tasks.map((task) => (
    <TaskItem
      key={task.id}
      task={task}
      profileId={props.profileId}
      authIdUser={props.authIdUser}
      getNormalDate={props.getNormalDate}
      deleteTask={props.deleteTask}
      updateTask={props.updateTask}
    />
  ));

  let onChangeCurrentPage = (e, value) => {
    props.setCurrentPage(value);
  };

  if (props.isFetching) return <Preloader />;

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Card md={6} xs={6} className={classes.root}>
        <CardHeader
          title={`Task list`}
          titleTypographyProps={{ align: "center" }}
          action={
            props.profileId === props.authIdUser && (
              <IconButton color="primary" onClick={handleClickOpen}>
                <AddCircleOutlineOutlinedIcon />
              </IconButton>
            )
          }
          className={classes.cardHeader}
        />
        <CardContent>
          <Grid container direction="row" justify="space-between" xs={12}>
            <Grid item xs={12}>
              {tasksElement}
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container direction="row" justify="center" xs={12}>
            <Grid item>
              <Pagination
                className={classes.center}
                count={pages.length}
                onChange={onChangeCurrentPage}
              />
            </Grid>
          </Grid>
        </CardActions>
      </Card>
      {open && (
        <AddTask
          open={open}
          handleClose={handleClose}
          addTask={props.addTask}
        />
      )}
    </Container>
  );
};

export default Tasks;
