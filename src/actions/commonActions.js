import {
  SET_FILTER_STATUS,
  SET_IS_FETCHING,
  SET_IS_MENU_OPEN,
  SET_IS_NOTIFICATION,
  SET_MESSAGE_NOTIFICATION,
  SET_ORDER_FIELDS,
  SET_SEARCH_WORD,
  SET_SEVERITY_NOTIFICATION,
  SET_TYPE_ORDER,
} from "../constants/commonConstants";

export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching,
});
export const setIsMenuOpen = (isMenuOpen) => ({
  type: SET_IS_MENU_OPEN,
  isMenuOpen,
});

export const setIsNotification = (isNotification) => ({
  type: SET_IS_NOTIFICATION,
  isNotification,
});

export const setMessageNotification = (messageNotification) => ({
  type: SET_MESSAGE_NOTIFICATION,
  messageNotification,
});

export const setSeverityNotification = (severityNotification) => ({
  type: SET_SEVERITY_NOTIFICATION,
  severityNotification,
});

export const setFilterStatus = (filterStatus) => ({
  type: SET_FILTER_STATUS,
  filterStatus,
});

export const setTypeOrder = (typeOrder) => ({
  type: SET_TYPE_ORDER,
  typeOrder,
});

export const setOrderFields = (orderFields) => ({
  type: SET_ORDER_FIELDS,
  orderFields,
});

export const setSearchWord = (searchWord) => ({
  type: SET_SEARCH_WORD,
  searchWord,
});
