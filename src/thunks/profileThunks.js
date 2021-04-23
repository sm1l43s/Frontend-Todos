import { UsersAPI, TaskAPI } from "../API/api";
import {
  setProfile,
  setTotalTaskCount,
  setProfileIsFetching,
  setUpdatedProfile,
  setAddedTask,
  setTasks,
  setDeletedTask,
  setUpdatedTask,
  setCompletedTask,
  setActiveTask,
  setFailedTask,
} from "../actions/profileActions";
import * as severity from "../constants/severityTypeConstants";
import { setNotification } from "../utils/utils";

export const getProfile = (
  userId,
  currentPage,
  pageSize,
  status,
  typeOrder,
  orderFields,
  searchWord
) => async (dispatch) => {
  let response = await Promise.all([
    UsersAPI.getUser(userId),
    TaskAPI.getTasksByStatus(
      userId,
      currentPage,
      pageSize,
      status,
      typeOrder,
      orderFields,
      searchWord
    ),
  ]);

  if (response[0].resultCode === 0) {
    dispatch(setProfile(response[0].data));
  } else {
    setNotification(
      dispatch,
      true,
      "Oops, something happened. Operation failed!",
      severity.ERROR
    );
  }

  if (response[1].resultCode === 0) {
    dispatch(setTasks(response[1].data));
    dispatch(setTotalTaskCount(response[1].totalElements));
    dispatch(setProfileIsFetching(false));
  }
};

export const updateProfile = (profile) => async (dispatch) => {
  let response = await UsersAPI.updateProfile(profile);

  if (response.resultCode === 0) {
    dispatch(setUpdatedProfile(response.data));
    setNotification(
      dispatch,
      true,
      "Profile updated successfully",
      severity.SUCCESS
    );
  } else {
    setNotification(
      dispatch,
      true,
      "Oops, something happened. Operation failed!",
      severity.ERROR
    );
  }
};

export const updateProfilePhoto = (file) => async (dispatch) => {
  let response = await UsersAPI.updateProfilePhoto(file);
  if (response.resultCode === 0) {
    dispatch(setUpdatedProfile(response.data));
    setNotification(
      dispatch,
      true,
      "Profile updated successfully",
      severity.SUCCESS
    );
  } else {
    setNotification(
      dispatch,
      true,
      "Oops, something happened. Operation failed!",
      severity.ERROR
    );
  }
};

export const addTask = ({ title, description, startDate, endDate }) => async (
  dispatch
) => {
  let response = await TaskAPI.addTask({
    title,
    description,
    startDate,
    endDate,
  });

  if (response.resultCode === 0) {
    dispatch(setAddedTask(response.data));
    setNotification(
      dispatch,
      true,
      "Task added successfully",
      severity.SUCCESS
    );
  } else {
    setNotification(
      dispatch,
      true,
      "Oops, something happened. Operation failed!",
      severity.ERROR
    );
  }
};

export const deleteTask = (idTask) => async (dispatch) => {
  let response = await TaskAPI.deleteTask(idTask);

  if (response.resultCode === 0) {
    dispatch(setDeletedTask(idTask));
    setNotification(
      dispatch,
      true,
      "Task deleted successfully",
      severity.SUCCESS
    );
  } else {
    setNotification(
      dispatch,
      true,
      "Oops, something happened. Operation failed!",
      severity.ERROR
    );
  }
};

export const updateTask = (
  idTask,
  { title, description, startDate, endDate, status }
) => async (dispatch) => {
  let response = await TaskAPI.updateTask(idTask, {
    title,
    description,
    startDate,
    endDate,
    status,
  });

  if (response.resultCode === 0) {
    dispatch(setUpdatedTask(idTask, response.data));
    dispatch(setCompletedTask());
    dispatch(setActiveTask());
    dispatch(setFailedTask());
    setNotification(
      dispatch,
      true,
      "Task updated successfully",
      severity.SUCCESS
    );
  } else {
    setNotification(
      dispatch,
      true,
      "Oops, something happened. Operation failed!",
      severity.ERROR
    );
  }
};
