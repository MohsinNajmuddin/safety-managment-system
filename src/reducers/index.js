import { combineReducers } from "redux-immutable";

import user from "./userReducer";

const appReducers = combineReducers({
  user
});
export default appReducers;
