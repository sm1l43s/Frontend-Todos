import React, { useEffect } from "react";
import Tasks from "./Tasks";
import { connect } from "react-redux";
import { addTask, deleteTask, updateTask } from "../../../thunks/profileThunks";
import { setCurrentPage } from "../../../actions/profileActions";
import { getNormalDate } from "../../../utils/utils";

const TasksContainer = (props) => {
  useEffect(() => {}, [
    props.deleteTask,
    props.addTask,
    props.updateTask,
    props.pageSize,
    props.totalTaskCount,
  ]);

  return <Tasks {...props} />;
};

let mstp = (state) => ({
  profileId: state.profile.profile.id,
  authIdUser: state.auth.user.id,
  tasks: state.profile.tasks,
  totalTaskCount: state.profile.totalTaskCount,
  completedTask: state.profile.completedTask,
  currentPage: state.profile.currentPage,
  pageSize: state.profile.pageSize,
});

export default connect(mstp, {
  setCurrentPage,
  addTask,
  deleteTask,
  updateTask,
  getNormalDate,
})(TasksContainer);
