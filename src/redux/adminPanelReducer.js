import {
  SET_CURRENT_PAGE,
  SET_PAGE_SIZE, SET_REPORTS,
  SET_TOTAL_COUNT_USERS,
  SET_USERS,
} from "../constants/adminPanelConstants";

let initState = {
  users: [],
  reports: {
    totalUsers: 0,
    newUsers: 0,
    totalTask: 0,
    completedTask: 0,
  },
  totalCountUsers: 0,
  currentPage: 1,
  pageSize: 10,
};

const adminPanelReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }

    case SET_PAGE_SIZE: {
      return {
        ...state,
        pageSize: action.pageSize,
      };
    }

    case SET_TOTAL_COUNT_USERS: {
      return {
        ...state,
        totalCountUsers: action.totalCountUsers,
      };
    }

    case SET_REPORTS: {
      return {
        ...state,
        reports: action.reports,
      }
    }

    default:
      return state;
  }
};

export default adminPanelReducer;
