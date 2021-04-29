import * as severity from "../constants/severityTypeConstants";
import { setNotification } from "../utils/utils";
import { AdminAPI } from "../API/api";
import {setTotalCountUsers, setUsers} from "../actions/adminPanelAction";

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
