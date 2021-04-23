import TaskFilter from "./TaskFilter";
import React from "react";
import { connect } from "react-redux";
import { setCurrentPage, setPageSize } from "../../../actions/profileActions";
import {
  setFilterStatus,
  setOrderFields,
  setSearchWord,
  setTypeOrder,
} from "../../../actions/commonActions";

const TaskFilterContainer = (props) => {
  return <TaskFilter {...props} />;
};

let mstp = (state) => ({
  filterStatus: state.commonElements.filterStatus,
  typeOrder: state.commonElements.typeOrder,
  orderFields: state.commonElements.orderFields,
  pageSize: state.profile.pageSize,
  searchWord: state.commonElements.searchWord,
});

export default connect(mstp, {
  setPageSize,
  setFilterStatus,
  setCurrentPage,
  setTypeOrder,
  setOrderFields,
  setSearchWord,
})(TaskFilterContainer);
