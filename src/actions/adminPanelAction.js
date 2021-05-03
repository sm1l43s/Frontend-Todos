import {
  SET_CURRENT_PAGE, SET_EDIT_USER, SET_IS_MENU,
  SET_PAGE_SIZE,
  SET_REPORTS,
  SET_TOTAL_COUNT_USERS,
  SET_USERS,
} from "../constants/adminPanelConstants";

export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setPageSize = (pageSize) => ({ type: SET_PAGE_SIZE, pageSize });
export const setTotalCountUsers = (totalCountUsers) => ({
  type: SET_TOTAL_COUNT_USERS,
  totalCountUsers,
});
export const setReports = (reports) => ({ type: SET_REPORTS, reports });

export const setEditUser = (id) => ({type: SET_EDIT_USER, id});