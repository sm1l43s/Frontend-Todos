import {
  setIsNotification,
  setMessageNotification,
  setSeverityNotification,
} from "../actions/commonActions";

const BASE_64 = "BASE_64";
const GET_VALID_DATE = "GET_VALID_DATE";
const GET_SHORT_TEXT = "GET_SHORT_TEXT";

export const arrayBufferToBase64 = (buffer) => {
  let binary = "";
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  let base64 = window.btoa(binary);
  return {
    type: BASE_64,
    base64,
  };
};

export const getNormalDate = (date) => {
  let d = new Date(date);
  let validDate =
    getTextMonth(d.getMonth()) +
    " " +
    checkDate(d.getDate()) +
    ", " +
    d.getFullYear();
  return {
    type: GET_VALID_DATE,
    validDate,
  };
};
export const getShortText = (text) => {
  if (text.length > 42) {
    return {
      type: GET_SHORT_TEXT,
      text: text.substr(0, 42) + "...",
    };
  }
  return {
    type: GET_SHORT_TEXT,
    text,
  };
};

const checkDate = (date) => {
  return date < 10 ? "0" + date : date;
};

const getTextMonth = (monthCount) => {
  switch (monthCount) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Failed month";
  }
};

export const calculateCountItemsByCriteria = (
  items,
  objPropsName,
  criteria
) => {
  let count = 0;

  for (let i = 0; i < items.length; i++) {
    if (items[i][objPropsName] === criteria) count++;
  }

  return count;
};

export const getItemsByCriteria = (
    items,
    objPropsName,
    criteria
) => {
  for (let i = 0; i < items.length; i++) {
    if (items[i][objPropsName] == criteria) {
      return items[i];
    }
  }
};

export const setNotification = (
  dispatch,
  isNotification,
  message,
  severity
) => {
  dispatch(setIsNotification(isNotification));
  dispatch(setMessageNotification(message));
  dispatch(setSeverityNotification(severity));
};
