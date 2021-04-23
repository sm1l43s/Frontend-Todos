import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../thunks/userThunks";
import { setCurrentPage, setPageSize } from "../../actions/userActions";
import Users from "./Users";
import {
  arrayBufferToBase64,
  getNormalDate,
  getShortText,
} from "../../utils/utils";

const UsersContainer = ({
  currentPage,
  pageSize,
  getUsers,
  orderType,
  orderFields,
  searchWord,
  ...props
}) => {
  useEffect(() => {
    getUsers(currentPage, pageSize, orderType, orderFields, searchWord);
  }, [currentPage, pageSize, getUsers, orderType, orderFields, searchWord]);

  return <Users {...{ currentPage, pageSize, ...props }} />;
};

let mstp = (state) => ({
  users: state.users.users,
  currentPage: state.users.currentPage,
  pageSize: state.users.pageSize,
  totalElements: state.users.totalElements,
  orderType: state.users.orderType,
  orderFields: state.users.orderFields,
  searchWord: state.users.searchWord,
});

export default connect(mstp, {
  getUsers,
  setCurrentPage,
  setPageSize,
  arrayBufferToBase64,
  getNormalDate,
  getShortText,
})(UsersContainer);
