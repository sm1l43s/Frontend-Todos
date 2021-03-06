import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import commonReducer from "./commonReducer";
import signUpReducer from "./signUpReducer";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";
import adminPanelReducer from "./adminPanelReducer";

let reducer = combineReducers({
  auth: authReducer,
  signUp: signUpReducer,
  users: usersReducer,
  profile: profileReducer,
  adminPanel: adminPanelReducer,
  commonElements: commonReducer,
});

let store = createStore(reducer, applyMiddleware(thunk));
window.store = store;

export default store;
