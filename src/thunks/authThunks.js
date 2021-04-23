import {
  setErrorMessages,
  setIsAuth,
  setIsError,
  setUserData,
} from "../actions/authActions";
import { setIsFetching } from "../actions/commonActions";
import { AuthAPI } from "../API/api";

export const signin = (data) => async (dispath) => {
  dispath(setIsFetching(true));
  let response = await AuthAPI.signin(data);
  if (response.resultCode === 0) {
    dispath(setIsFetching(false));
    dispath(setErrorMessages(""));
    dispath(setUserData(response.data.user));
    dispath(setIsAuth(true));
    dispath(setIsError(false));
  } else {
    dispath(setIsFetching(false));
    if (response.data) {
      dispath(setErrorMessages(response.data.messages));
    } else {
      dispath(
        setErrorMessages("Oops, some error. Repeat operation later, please!")
      );
    }
    dispath(setIsError(true));
  }
};
export const getInfoAboutMe = () => async (dispath) => {
  dispath(setIsFetching(true));
  let response = await AuthAPI.getInfoAboutMe();
  if (response.resultCode === 0) {
    dispath(setIsFetching(false));
    dispath(setUserData(response.data));
    dispath(setIsAuth(true));
    dispath(setErrorMessages(""));
  } else {
    dispath(setIsFetching(false));
    dispath(setIsAuth(false));
    dispath(setErrorMessages("Time authorization expired. Sign in again!"));
  }
};
