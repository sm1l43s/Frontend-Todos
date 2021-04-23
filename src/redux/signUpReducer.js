import {
  SET_IS_ERROR,
  SET_IS_REGISTERED,
  SET_ERROR_MESSAGES,
} from "../constants/signUpConstants";

let initState = {
  isError: false,
  isRegistered: false,
  errorMessages: "",
};

const signUpReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_IS_ERROR: {
      return {
        ...state,
        isError: action.isError,
      };
    }

    case SET_IS_REGISTERED: {
      return {
        ...state,
        isRegistered: action.isRegistered,
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

export default signUpReducer;
