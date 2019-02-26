import { call } from "redux-saga/effects";

import * as userActions from "../../actions/userActions";
import * as loginModel from "../../models/loginModel";
import { requestProcessEngine } from "./helpers";

//Login User Saga
export function* loginUser(action) {
  const options = {
    initializeArgs: [action.formData],
    successArgs: [],
    errorArgs: []
  };
  yield call(
    requestProcessEngine,
    userActions.user.login,
    () => loginModel.login(action.formData),
    options
  );
}
