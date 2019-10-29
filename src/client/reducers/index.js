import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

/**
 * DEPRECATED IN FAVOR OF GRAPHQL CACHE
 */
export default combineReducers({
  users: usersReducer,
  auth: authReducer
});
