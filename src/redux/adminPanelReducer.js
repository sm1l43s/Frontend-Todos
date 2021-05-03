import {
  SET_CURRENT_PAGE, SET_EDIT_USER, SET_IS_UPDATED,
  SET_PAGE_SIZE,
  SET_REPORTS,
  SET_TOTAL_COUNT_USERS,
  SET_USERS, UPDATE_USERS,
} from "../constants/adminPanelConstants";
import {getItemsByCriteria, updateDataObject} from "../utils/utils";

let initState = {
  totalCountUsers: 0,
  pageSize: 5,
  currentPage: 1,
  users: [],
  reports: {
    totalTask: 0,
    totalUsers: 0,
    newUsers: 0,
    totalActiveTask: 0,
    totalCompletedTask: 0,
    totalDeletedTask: 0,
  },
  editUser: {},
  isUpdated: false,
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
      };
    }

    case SET_EDIT_USER: {
      return {
        ...state,
        editUser: getItemsByCriteria(state.users, "id", action.id),
      }
    }

    case UPDATE_USERS: {
      return {
        ...state,
        users: updateDataObject(state.users, "id", action.user.id, action.user),
      }
    }

    case SET_IS_UPDATED: {
      return {
        ...state,
        isUpdated: action.isUpdated,
      }
    }

    default:
      return state;
  }
};

export default adminPanelReducer;
