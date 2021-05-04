import {
  SET_CURRENT_PAGE,
  SET_EDIT_USER,
  SET_IS_UPDATED,
  SET_ORDER_FIELDS,
  SET_ORDER_TYPE,
  SET_PAGE_SIZE,
  SET_REPORTS,
  SET_SEARCH_WORD,
  SET_TOTAL_COUNT_USERS,
  SET_USERS,
  UPDATE_USERS,
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

export const setIsUpdated = (isUpdated) => ({
  type: SET_IS_UPDATED,
  isUpdated,
});
export const setReports = (reports) => ({ type: SET_REPORTS, reports });

export const setEditUser = (id) => ({ type: SET_EDIT_USER, id });

export const setUpdatedUSer = (user) => ({ type: UPDATE_USERS, user });

export const setOrderType = (orderType) => {
  return { type: SET_ORDER_TYPE, orderType };
};

export const setOrderFields = (orderFields) => ({
  type: SET_ORDER_FIELDS,
  orderFields,
});

export const setSearchWord = (searchWord) => ({
  type: SET_SEARCH_WORD,
  searchWord,
});
