import {
  SET_PROFILE_IS_FETCHING,
  SET_PROFILE,
  SET_TOTAL_TASK_COUNT,
  SET_CURRENT_PAGE,
  UPDATE_PROFILE,
  SET_PAGE_SIZE,
  SET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SET_ACTIVE_TASK,
  SET_COMPLETED_TASK,
  SET_FAILED_TASK,
  CLEAR_TASKS,
} from "../constants/profileConstants";

export const setProfileIsFetching = (isFetching) => ({
  type: SET_PROFILE_IS_FETCHING,
  isFetching,
});

export const setProfile = (profile) => ({ type: SET_PROFILE, profile });

export const setTotalTaskCount = (totalTaskCount) => ({
  type: SET_TOTAL_TASK_COUNT,
  totalTaskCount,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setPageSize = (pageSize) => ({ type: SET_PAGE_SIZE, pageSize });

export const setUpdatedProfile = (profile) => ({
  type: UPDATE_PROFILE,
  profile,
});

export const setTasks = (tasks) => ({ type: SET_TASKS, tasks });

export const setAddedTask = (task) => ({ type: ADD_TASK, task });

export const setDeletedTask = (idTask) => ({ type: DELETE_TASK, idTask });

export const setUpdatedTask = (idTask, task) => ({
  type: UPDATE_TASK,
  idTask,
  task,
});

export const setActiveTask = () => ({
  type: SET_ACTIVE_TASK,
});
export const setCompletedTask = () => ({
  type: SET_COMPLETED_TASK,
});

export const setFailedTask = () => ({
  type: SET_FAILED_TASK,
});

export const clearTasks = () => ({
  type: CLEAR_TASKS,
});
