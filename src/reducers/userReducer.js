import { fromJS } from "immutable";
import { createReducer, actionsMapper } from "./helper";
import * as actionIDs from "../actions/actionIDs";

// Login User Reducer
const loginUserOptions = {
  onSuccess: (state, action) => {
    return state.merge({
      isLogin: true,
      ...action.user
    });
  }
};
const loginUserHandlers = actionsMapper(actionIDs.user.login, loginUserOptions);

export default createReducer(initialState, {
  ...loginUserHandlers
});
