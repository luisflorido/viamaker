import { all, call, takeLatest, fork, put } from 'redux-saga/effects';
import { Creators as Actions, Types } from 'store/ducks/classes';
import api from 'services/api';
import { parseError } from 'utils';
import { toast } from 'react-toastify';

function* loadAll({ payload }) {
  try {
    const { status, data } = yield call(api.get, '/classes', {
      params: payload,
    });
    if (status === 200) {
      yield put(Actions.loadClassesSuccess(data?.data));
    }
  } catch (e) {
    parseError(e);
    yield put(Actions.loadClassesError());
  }
}

function* load({ payload }) {
  try {
    const { status, data } = yield call(api.get, `/classes/${payload}`);
    if (status === 200) {
      yield put(Actions.loadClassSuccess(data));
    }
  } catch (e) {
    parseError(e);
    yield put(Actions.loadClassError());
  }
}

function* create({ payload }) {
  try {
    const { status, data } = yield call(api.post, '/classes', payload);
    if (status === 200) {
      toast.success('Turma criada com sucesso!');
      yield put(Actions.createClassSuccess(data));
    }
  } catch (e) {
    parseError(e);
    yield put(Actions.createClassError());
  }
}

function* update({ payload }) {
  try {
    const { status } = yield call(api.put, `/classes/${payload.id}`, payload);
    if (status === 200) {
      toast.success('Turma atualizada com sucesso!');
      yield put(Actions.updateClassSuccess());
    }
  } catch (e) {
    parseError(e);
    yield put(Actions.updateClassError());
  }
}

function* destroy({ payload }) {
  try {
    const { status, data } = yield call(api.delete, `/classes/${payload}`);
    if (status === 200) {
      toast.success('Turma excluída com sucesso!');
      yield put(Actions.deleteClassSuccess(data));
    }
  } catch (e) {
    parseError(e);
    yield put(Actions.deleteClassError());
  }
}

function* loadAllWatcher() {
  yield takeLatest(Types.LOAD_CLASSES_REQUEST, loadAll);
}

function* loadWatcher() {
  yield takeLatest(Types.LOAD_CLASS_REQUEST, load);
}

function* createWatcher() {
  yield takeLatest(Types.CREATE_CLASS_REQUEST, create);
}

function* updateWatcher() {
  yield takeLatest(Types.UPDATE_CLASS_REQUEST, update);
}

function* deleteWatcher() {
  yield takeLatest(Types.DELETE_CLASS_REQUEST, destroy);
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
