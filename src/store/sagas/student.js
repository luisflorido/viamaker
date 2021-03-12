import { all, call, takeLatest, fork, put } from 'redux-saga/effects';
import { Creators as Actions, Types } from 'store/ducks/student';
import api from 'services/api';
import { parseError } from 'utils';
import { toast } from 'react-toastify';

function* loadAll({ payload }) {
  try {
    const { status, data } = yield call(api.get, '/students', {
      params: payload,
    });
    if (status === 200) {
      yield put(Actions.loadStudentsSuccess(data?.data));
    }
  } catch (e) {
    parseError(e);
    yield put(Actions.loadStudentsError());
  }
}

function* load({ payload }) {
  try {
    const { status, data } = yield call(api.get, `/students/${payload}`);
    if (status === 200) {
      yield put(Actions.loadStudentSuccess(data));
    }
  } catch (e) {
    parseError(e);
    yield put(Actions.loadStudentError());
  }
}

function* create({ payload }) {
  try {
    const { status, data } = yield call(api.post, '/students', payload);
    if (status === 200) {
      toast.success('Aluno criado com sucesso!');
      yield put(Actions.createStudentSuccess(data));
    }
  } catch (e) {
    parseError(e);
    yield put(Actions.createStudentError());
  }
}

function* update({ payload }) {
  try {
    const { status } = yield call(api.put, `/students/${payload.id}`, payload);
    if (status === 200) {
      toast.success('Aluno atualizado com sucesso!');
      yield put(Actions.updateStudentSuccess());
    }
  } catch (e) {
    parseError(e);
    yield put(Actions.updateStudentError());
  }
}

function* destroy({ payload }) {
  try {
    const { status, data } = yield call(api.delete, `/students/${payload}`);
    if (status === 200) {
      toast.success('Aluno excluído com sucesso!');
      yield put(Actions.deleteStudentSuccess(data));
    }
  } catch (e) {
    parseError(e);
    yield put(Actions.deleteStudentError());
  }
}

function* loadAllWatcher() {
  yield takeLatest(Types.LOAD_STUDENTS_REQUEST, loadAll);
}

function* loadWatcher() {
  yield takeLatest(Types.LOAD_STUDENT_REQUEST, load);
}

function* createWatcher() {
  yield takeLatest(Types.CREATE_STUDENT_REQUEST, create);
}

function* updateWatcher() {
  yield takeLatest(Types.UPDATE_STUDENT_REQUEST, update);
}

function* deleteWatcher() {
  yield takeLatest(Types.DELETE_STUDENT_REQUEST, destroy);
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
