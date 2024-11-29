import { combineReducers } from "redux";
import courseReducer from "../compos/course/redux/courseReducer";

export default combineReducers({
  courseReducer: courseReducer,
});
