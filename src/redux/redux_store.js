import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import commonReducer from "./commonReducer";
import signUpReducer from "./signUpReducer";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";

let reducer = combineReducers({
  auth: authReducer,
  signUp: signUpReducer,
  users: usersReducer,
  profile: profileReducer,
  commonElements: commonReducer,
});

let store = createStore(reducer, applyMiddleware(thunk));
window.store = store;
export default store;
