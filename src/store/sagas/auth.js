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
      localStorage.setItem('@refresh_token', data?.refreshToken);
      toast.success('Logado com sucesso!');
      yield put(Actions.loginSuccess(data));
    }
  } catch (e) {
    parseError(e);
    yield put(Actions.loginError());
  }
}

function logout() {
  sessionStorage.removeItem('@access_token');
  localStorage.removeItem('@refresh_token');
}

function* loginWatcher() {
  yield takeLatest(Types.LOGIN_REQUEST, login);
}

function* logoutWatcher() {
  yield takeLatest(Types.LOGOUT, logout);
}

export default function* rootSaga() {
  yield all([fork(loginWatcher), fork(logoutWatcher)]);
}
