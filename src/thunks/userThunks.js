import { UsersAPI } from "../API/api";
import { setIsFetching } from "../actions/commonActions";
import { setUsers, setTotalElements } from "../actions/userActions";
import { setNotification } from "../utils/utils";
import * as severity from "../constants/severityTypeConstants";

export const getUsers = (
  currentPage,
  sizePage,
  orderType,
  orderFields,
  searchWord
) => async (dispatch) => {
  dispatch(setIsFetching(true));
  let response = await UsersAPI.getUsers(
    currentPage,
    sizePage,
    orderType,
    orderFields,
    searchWord
  );
  if (response.resultCode === 0) {
    dispatch(setIsFetching(false));
    dispatch(setUsers(response.data));
    dispatch(setTotalElements(response.totalElements));
  } else {
    dispatch(setIsFetching(false));
    setNotification(
      dispatch,
      true,
      "Oops, something happened. Operation failed!",
      severity.ERROR
    );
  }
};
