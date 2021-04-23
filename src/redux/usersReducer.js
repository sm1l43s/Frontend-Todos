import {
  SET_USERS,
  SET_TOTAL_COUNT_ELEMENTS,
  SET_PAGE_SIZE,
  SET_CURRENT_PAGE,
  SET_ORDER_TYPE,
  SET_ORDER_FIELDS,
  SET_SEARCH_WORD,
} from "../constants/userConstants";

const initState = {
  users: [],
  pageSize: 10,
  currentPage: 1,
  totalElements: 0,
  orderType: "asc",
  orderFields: "id",
  searchWord: "",
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return {
        ...state,
        users: [...action.users],
      };
    }
    case SET_PAGE_SIZE: {
      return {
        ...state,
        pageSize: action.pageSize,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_TOTAL_COUNT_ELEMENTS: {
      return {
        ...state,
        totalElements: action.totalElements,
      };
    }

    case SET_ORDER_TYPE: {
      return {
        ...state,
        orderType: action.orderType,
      };
    }

    case SET_ORDER_FIELDS: {
      return {
        ...state,
        orderFields: action.orderFields,
      };
    }

    case SET_SEARCH_WORD: {
      return {
        ...state,
        searchWord: action.searchWord,
      };
    }

    default: {
      return state;
    }
  }
};

export default usersReducer;
