import {
  SET_IS_AUTH,
  SET_IS_ERROR,
  SET_USER_DATA,
  SET_ERROR_MESSAGES,
} from "../constants/authConstants";

export const setUserData = (data) => ({ type: SET_USER_DATA, data });
export const setIsAuth = (isAuth) => ({ type: SET_IS_AUTH, isAuth });
export const setIsError = (isError) => ({ type: SET_IS_ERROR, isError });
export const setErrorMessages = (message) => ({
  type: SET_ERROR_MESSAGES,
  message,
});
