import { fork } from "redux-saga/effects";

import * as userSagas from "../sagas/userSagas";
import * as actionIDs from "../../actions/actionIDs";
import { sagaWatcher } from "./helpers";

const userWatcher = [
  fork(sagaWatcher(actionIDs.user.login, userSagas.loginUser))
];

export default userWatcher;
