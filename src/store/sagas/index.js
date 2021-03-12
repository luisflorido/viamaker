import { all } from 'redux-saga/effects';

import authSaga from './auth';
import schoolSaga from './school';
import classesSaga from './classes';
import studentSaga from './student';

export default function* rootSaga() {
  yield all([authSaga(), schoolSaga(), classesSaga(), studentSaga()]);
}
