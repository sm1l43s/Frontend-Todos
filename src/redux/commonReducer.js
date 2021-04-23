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

let initState = {
  isFetching: false,
  isMenuOpen: false,
  isNotification: false,
  messageNotification: "",
  severityNotification: "",
  filterStatus: "all",
  typeOrder: "asc",
  orderFields: "id",
  searchWord: "",
};

const commonReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }

    case SET_IS_MENU_OPEN: {
      return {
        ...state,
        isMenuOpen: action.isMenuOpen,
      };
    }

    case SET_IS_NOTIFICATION: {
      return {
        ...state,
        isNotification: action.isNotification,
      };
    }

    case SET_MESSAGE_NOTIFICATION: {
      return {
        ...state,
        messageNotification: action.messageNotification,
      };
    }

    case SET_SEVERITY_NOTIFICATION: {
      return {
        ...state,
        severityNotification: action.severityNotification,
      };
    }

    case SET_FILTER_STATUS: {
      return {
        ...state,
        filterStatus: action.filterStatus,
      };
    }

    case SET_TYPE_ORDER: {
      return {
        ...state,
        typeOrder: action.typeOrder,
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

export default commonReducer;
