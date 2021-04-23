import { AuthAPI } from "../API/api";
import { setIsFetching } from "../actions/commonActions";
import {
  setIsRegistered,
  setErrorMessages,
  setIsError,
} from "../actions/signUpActions";

export const signup = (data) => async (dispatch) => {
  dispatch(setIsFetching(true));
  let response = await AuthAPI.signup(data);

  if (response.resultCode === 0) {
    dispatch(setIsFetching(false));
    dispatch(setIsRegistered(true));
    dispatch(setErrorMessages(""));
    dispatch(setIsError(false));
  } else {
    dispatch(setIsFetching(false));
    dispatch(setIsError(true));
    dispatch(setErrorMessages(response.messages));
  }
};
