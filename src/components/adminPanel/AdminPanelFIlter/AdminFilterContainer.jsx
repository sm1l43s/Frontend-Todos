import AdminFilter from "./AdminFilter";
import React from "react";
import { connect } from "react-redux";
import {
  setCurrentPage,
  setOrderFields,
  setOrderType,
  setPageSize,
  setSearchWord,
} from "../../../actions/adminPanelAction";

const AdminFilterContainer = (props) => {
  return <AdminFilter {...props} />;
};

const mstp = (state) => ({
  searchWord: state.adminPanel.searchWord,
  pageSize: state.adminPanel.pageSize,
  orderType: state.adminPanel.orderType,
  orderFields: state.adminPanel.orderFields,
});

export default connect(mstp, {
  setSearchWord,
  setPageSize,
  setOrderType,
  setOrderFields,
  setCurrentPage,
})(AdminFilterContainer);
