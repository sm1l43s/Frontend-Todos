import * as severity from "../constants/severityTypeConstants";
import { setNotification } from "../utils/utils";
import { AdminAPI } from "../API/api";
import {
  setIsUpdated,
  setReports,
  setTotalCountUsers, setUpdatedUSer,
  setUsers,
} from "../actions/adminPanelAction";

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  let response = await AdminAPI.getUsers(currentPage, pageSize);

  if (response.resultCode === 0) {
    dispatch(setUsers(response.data));
    dispatch(setTotalCountUsers(response.totalElements));
  } else {
    setNotification(
      dispatch,
      true,
      "Oops, something happened. Operation failed!",
      severity.ERROR
    );
  }
};

export const updateUsers = (user, isUpdated) => async (dispatch) => {
  let response = await AdminAPI.updateUser(user);
  if (response.resultCode === 0) {
    dispatch(setIsUpdated(!isUpdated));
    dispatch(setUpdatedUSer(response.data));
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
}

export const getReports = () => async (dispatch) => {
  let response = await AdminAPI.getReports();

  if (response.resultCode === 0) {
    dispatch(setReports(response.data));
  } else {
    setNotification(
      dispatch,
      true,
      "Oops, something happened. Operation failed!",
      severity.ERROR
    );
  }
};
