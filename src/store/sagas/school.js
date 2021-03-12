import { all, call, takeLatest, fork, put } from 'redux-saga/effects';
import { Creators as Actions, Types } from 'store/ducks/school';
import api from 'services/api';
import { parseError } from 'utils';
import { toast } from 'react-toastify';

function* loadAll() {
  try {
    const { status, data } = yield call(api.get, '/schools');
    if (status === 200) {
      yield put(Actions.loadSchoolsSuccess(data?.data));
    }
  } catch (e) {
    parseError(e);
    yield put(Actions.loadSchoolsError());
  }
}

function* load({ payload }) {
  try {
    const { status, data } = yield call(api.get, `/schools/${payload}`);
    if (status === 200) {
      yield put(Actions.loadSchoolSuccess(data));
    }
  } catch (e) {
    parseError(e);
    yield put(Actions.loadSchoolError());
  }
}

function* create({ payload }) {
  try {
    const { status, data } = yield call(api.post, '/schools', payload);
    if (status === 200) {
      toast.success('Escola criada com sucesso!');
      yield put(Actions.createSchoolSuccess(data));
    }
  } catch (e) {
    parseError(e);
    yield put(Actions.createSchoolError());
  }
}

function* update({ payload }) {
  try {
    const { status } = yield call(api.put, `/schools/${payload.id}`, payload);
    if (status === 200) {
      toast.success('Escola atualizada com sucesso!');
      yield put(Actions.updateSchoolSuccess());
    }
  } catch (e) {
    parseError(e);
    yield put(Actions.updateSchoolError());
  }
}

function* destroy({ payload }) {
  try {
    const { status, data } = yield call(api.delete, `/schools/${payload}`);
    if (status === 200) {
      toast.success('Escola excluída com sucesso!');
      yield put(Actions.deleteSchoolSuccess(data));
    }
  } catch (e) {
    parseError(e);
    yield put(Actions.deleteSchoolError());
  }
}

function* loadAllWatcher() {
  yield takeLatest(Types.LOAD_SCHOOLS_REQUEST, loadAll);
}

function* loadWatcher() {
  yield takeLatest(Types.LOAD_SCHOOL_REQUEST, load);
}

function* createWatcher() {
  yield takeLatest(Types.CREATE_SCHOOL_REQUEST, create);
}

function* updateWatcher() {
  yield takeLatest(Types.UPDATE_SCHOOL_REQUEST, update);
}

function* deleteWatcher() {
  yield takeLatest(Types.DELETE_SCHOOL_REQUEST, destroy);
}

export default function* rootSaga() {
  yield all([
    fork(loadAllWatcher),
    fork(loadWatcher),
    fork(createWatcher),
    fork(updateWatcher),
    fork(deleteWatcher),
  ]);
}
