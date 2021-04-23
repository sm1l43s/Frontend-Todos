import { connect } from "react-redux";
import FilterUsers from "./FilterUsers";
import React from "react";
import {
  setCurrentPage,
  setOrderFields,
  setOrderType,
  setPageSize,
  setSearchWord,
} from "../../../actions/userActions";

const FilterUsersContainer = (props) => {
  return <FilterUsers {...props} />;
};

let mstp = (state) => ({
  searchWord: state.users.searchWord,
  pageSize: state.users.pageSize,
  orderType: state.users.orderType,
  orderFields: state.users.orderFields,
});

export default connect(mstp, {
  setSearchWord,
  setPageSize,
  setOrderType,
  setOrderFields,
  setCurrentPage,
})(FilterUsersContainer);
