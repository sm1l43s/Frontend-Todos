import {
  SET_CURRENT_PAGE,
  SET_USERS,
  SET_TOTAL_COUNT_ELEMENTS,
  SET_PAGE_SIZE,
  SET_ORDER_TYPE,
  SET_ORDER_FIELDS,
  SET_SEARCH_WORD,
} from "../constants/userConstants";

export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalElements = (totalElements) => ({
  type: SET_TOTAL_COUNT_ELEMENTS,
  totalElements,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setPageSize = (pageSize) => ({ type: SET_PAGE_SIZE, pageSize });

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
