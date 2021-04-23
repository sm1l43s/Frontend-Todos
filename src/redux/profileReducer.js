import {
  SET_PROFILE,
  SET_PROFILE_IS_FETCHING,
  SET_TOTAL_TASK_COUNT,
  SET_CURRENT_PAGE,
  SET_PAGE_SIZE,
  UPDATE_PROFILE,
  SET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SET_ACTIVE_TASK,
  SET_COMPLETED_TASK,
  SET_FAILED_TASK,
  CLEAR_TASKS,
} from "../constants/profileConstants";
import { calculateCountItemsByCriteria } from "../utils/utils";

let initState = {
  profile: null,
  tasks: [],
  totalTaskCount: 0,
  activeTask: 0,
  completedTask: 0,
  failedTask: 0,
  currentPage: 1,
  pageSize: 10,
  profileIsFetching: false,
};

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    case SET_PROFILE_IS_FETCHING: {
      return {
        ...state,
        profileIsFetching: action.isFetching,
      };
    }

    case SET_TASKS: {
      return {
        ...state,
        tasks: [...action.tasks],
      };
    }

    case CLEAR_TASKS: {
      return {
        ...state,
        tasks: [],
      };
    }

    case SET_TOTAL_TASK_COUNT: {
      return {
        ...state,
        totalTaskCount: action.totalTaskCount,
      };
    }

    case SET_ACTIVE_TASK: {
      return {
        ...state,
        activeTask: calculateCountItemsByCriteria(
          state.tasks,
          "status",
          "ACTIVE"
        ),
      };
    }

    case SET_COMPLETED_TASK: {
      return {
        ...state,
        completedTask: calculateCountItemsByCriteria(
          state.tasks,
          "status",
          "COMPLETED"
        ),
      };
    }

    case SET_FAILED_TASK: {
      return {
        ...state,
        failedTask: calculateCountItemsByCriteria(
          state.tasks,
          "status",
          "FAILED"
        ),
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

    case UPDATE_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    case ADD_TASK: {
      return {
        ...state,
        tasks: [action.task, ...state.tasks],
        totalTaskCount: state.totalTaskCount + 1,
      };
    }

    case DELETE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => task.id.toString() !== action.idTask.toString()
        ),
        totalTaskCount: state.totalTaskCount - 1,
        activeTask: calculateCountItemsByCriteria(
          state.tasks,
          "status",
          "ACTIVE"
        ),
        completedTask: calculateCountItemsByCriteria(
          state.tasks,
          "status",
          "COMPLETED"
        ),
        failedTask: calculateCountItemsByCriteria(
          state.tasks,
          "status",
          "FAILED"
        ),
      };
    }

    case UPDATE_TASK: {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id.toString() === action.idTask.toString()) {
            return action.task;
          }
          return task;
        }),
      };
    }

    default: {
      return state;
    }
  }
};

export default profileReducer;
