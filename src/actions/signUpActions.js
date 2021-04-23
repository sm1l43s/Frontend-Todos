import {
  SET_IS_ERROR,
  SET_IS_REGISTERED,
  SET_ERROR_MESSAGES,
} from "../constants/signUpConstants";

export const setIsError = (isError) => ({ type: SET_IS_ERROR, isError });
export const setIsRegistered = (isRegistered) => ({
  type: SET_IS_REGISTERED,
  isRegistered,
});
export const setErrorMessages = (message) => ({
  type: SET_ERROR_MESSAGES,
  message,
});
