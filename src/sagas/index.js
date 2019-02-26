import { all } from "redux-saga/effects";
import userWatchers from "./watchers/userWatchers";

function* actionWatcher() {
  yield all(userWatchers);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
