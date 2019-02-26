import { put, call } from 'redux-saga/effects';
export function* requestProcessEngine(actions, actionHandle, options) {
  try {
    const { initializeArgs, successArgs } = options;
    yield put(actions.initialize(...(initializeArgs || []))); // Telling reducer to resource action started
    const response = yield call(actionHandle); // Performing actual action, may be making a web call
    const args = successArgs || [];
    args.push(response);
    yield put(actions.success(...args)); // Telling reducer resource is fetched
  } catch (e) {
    yield put(actions.error(...(options.errorArgs || []), e));
  }
}
