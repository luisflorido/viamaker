import { all, call, takeLatest, fork, put } from 'redux-saga/effects';
import { Creators as Actions, Types } from 'store/ducks/auth';
import api from 'services/api';
import { parseError } from 'utils';
import { toast } from 'react-toastify';

function* login({ payload }) {
  try {
    const { status, data } = yield call(api.post, '/login', payload);
    if (status === 200) {
      sessionStorage.setItem('@access_token', data?.token);
      toast.success('Logado com sucesso!');
      yield put(Actions.loginSuccess(data));
    }
  } catch (e) {
    parseError(e);
    yield put(Actions.loginError());
  }
}

function* loginWatcher() {
  yield takeLatest(Types.LOGIN_REQUEST, login);
}

export default function* rootSaga() {
  yield all([fork(loginWatcher)]);
}
