import { all } from 'redux-saga/effects';

import authSaga from './auth';
import schoolSaga from './school';

export default function* rootSaga() {
  yield all([authSaga(), schoolSaga()]);
}
