import { call, take, fork } from 'redux-saga/effects';

export const isObjectEqual = (a, b) => {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  for (let i = 0; i < aKeys.length; i++) {
    const aKey = aKeys[i];
    if (a[aKey] !== b[aKey]) {
      return false;
    }
  }
  return true;
};

export const actionInArray = (array, object) =>
  array.some(x => isObjectEqual(x, object));

export function* takeOneAndBlock(pattern, worker) {
  // on going requests
  const actions = [];
  while (true) {
    const action = yield take(pattern);
    // same request still being processed
    if (actionInArray(actions, action)) {
      continue;
    }
    actions.push(action);
    yield fork(function*() {
      yield call(worker, action);
      // remove once its been resolved
      const actionIdx = actions.splice(action);
      actions.splice(actionIdx, 1);
    });
  }
}
export const sagaWatcher = (actionIDs, saga) =>
  function*() {
    yield takeOneAndBlock(actionIDs.begin, saga);
  };
