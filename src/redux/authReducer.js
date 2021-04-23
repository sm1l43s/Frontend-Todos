import {
  SET_IS_AUTH,
  SET_IS_ERROR,
  SET_USER_DATA,
  SET_ERROR_MESSAGES,
} from "../constants/authConstants";

let initState = {
  user: null,
  isAuth: false,
  isError: false,
  errorMessages: "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_IS_AUTH: {
      return {
        ...state,
        isAuth: action.isAuth,
      };
    }

    case SET_IS_ERROR: {
      return {
        ...state,
        isError: action.isError,
      };
    }

    case SET_USER_DATA: {
      return {
        ...state,
        user: action.data,
      };
    }

    case SET_ERROR_MESSAGES: {
      return {
        ...state,
        errorMessages: action.message,
      };
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
