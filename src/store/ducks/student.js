export const Types = {
  LOAD_STUDENTS_REQUEST: 'STUDENT/LOAD_STUDENTS_REQUEST',
  LOAD_STUDENTS_SUCCESS: 'STUDENT/LOAD_STUDENTS_SUCCESS',
  LOAD_STUDENTS_ERROR: 'STUDENT/LOAD_STUDENTS_ERROR',

  LOAD_STUDENT_REQUEST: 'STUDENT/LOAD_STUDENT_REQUEST',
  LOAD_STUDENT_SUCCESS: 'STUDENT/LOAD_STUDENT_SUCCESS',
  LOAD_STUDENT_ERROR: 'STUDENT/LOAD_STUDENT_ERROR',

  CREATE_STUDENT_REQUEST: 'STUDENT/CREATE_STUDENT_REQUEST',
  CREATE_STUDENT_SUCCESS: 'STUDENT/CREATE_STUDENT_SUCCESS',
  CREATE_STUDENT_ERROR: 'STUDENT/CREATE_STUDENT_ERROR',
  CREATE_STUDENT_RESET: 'STUDENT/CREATE_STUDENT_RESET',

  UPDATE_STUDENT_REQUEST: 'STUDENT/UPDATE_STUDENT_REQUEST',
  UPDATE_STUDENT_SUCCESS: 'STUDENT/UPDATE_STUDENT_SUCCESS',
  UPDATE_STUDENT_ERROR: 'STUDENT/UPDATE_STUDENT_ERROR',
  UPDATE_STUDENT_RESET: 'STUDENT/UPDATE_STUDENT_RESET',

  DELETE_STUDENT_REQUEST: 'STUDENT/DELETE_STUDENT_REQUEST',
  DELETE_STUDENT_SUCCESS: 'STUDENT/DELETE_STUDENT_SUCCESS',
  DELETE_STUDENT_ERROR: 'STUDENT/DELETE_STUDENT_ERROR',
};

const INITIAL_STATE = {
  loading: false,
  error: false,
  data: null,
  student: null,
  createSuccess: null,
  updateSuccess: null,
  deleteSuccess: null,
};

export default function Student(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_STUDENTS_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_STUDENTS_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case Types.LOAD_STUDENTS_ERROR:
      return { ...state, loading: false };
    case Types.LOAD_STUDENT_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_STUDENT_SUCCESS:
      return { ...state, student: action.payload, loading: false };
    case Types.LOAD_STUDENT_ERROR:
      return { ...state, loading: false };
    case Types.CREATE_STUDENT_REQUEST:
      return { ...state, loading: true, createSuccess: null };
    case Types.CREATE_STUDENT_SUCCESS:
      return { ...state, loading: false, createSuccess: true };
    case Types.CREATE_STUDENT_ERROR:
      return { ...state, loading: false, createSuccess: false };
    case Types.CREATE_STUDENT_RESET:
      return { ...state, loading: false, createSuccess: null };
    case Types.UPDATE_STUDENT_REQUEST:
      return { ...state, loading: true, updateSuccess: null };
    case Types.UPDATE_STUDENT_SUCCESS:
      return { ...state, loading: false, updateSuccess: true };
    case Types.UPDATE_STUDENT_RESET:
      return { ...state, loading: false, updateSuccess: null };
    case Types.UPDATE_STUDENT_ERROR:
      return { ...state, loading: false, updateSuccess: false };
    case Types.DELETE_STUDENT_REQUEST:
      return { ...state, loading: true, deleteSuccess: null };
    case Types.DELETE_STUDENT_SUCCESS:
      return { ...state, loading: false, deleteSuccess: true };
    case Types.DELETE_STUDENT_ERROR:
      return { ...state, loading: false, deleteSuccess: false };
    default:
      return state;
  }
}

export const Creators = {
  loadStudentsRequest: (payload) => ({
    type: Types.LOAD_STUDENTS_REQUEST,
    payload,
  }),
  loadStudentsSuccess: (payload) => ({
    type: Types.LOAD_STUDENTS_SUCCESS,
    payload,
  }),
  loadStudentsError: () => ({
    type: Types.LOAD_STUDENTS_ERROR,
  }),
  loadStudentRequest: (payload) => ({
    type: Types.LOAD_STUDENT_REQUEST,
    payload,
  }),
  loadStudentSuccess: (payload) => ({
    type: Types.LOAD_STUDENT_SUCCESS,
    payload,
  }),
  loadStudentError: () => ({
    type: Types.LOAD_STUDENT_ERROR,
  }),
  createStudentRequest: (payload) => ({
    type: Types.CREATE_STUDENT_REQUEST,
    payload,
  }),
  createStudentSuccess: () => ({
    type: Types.CREATE_STUDENT_SUCCESS,
  }),
  createStudentError: () => ({
    type: Types.CREATE_STUDENT_ERROR,
  }),
  createStudentReset: () => ({
    type: Types.CREATE_STUDENT_RESET,
  }),
  updateStudentRequest: (payload) => ({
    type: Types.UPDATE_STUDENT_REQUEST,
    payload,
  }),
  updateStudentSuccess: () => ({
    type: Types.UPDATE_STUDENT_SUCCESS,
  }),
  updateStudentError: () => ({
    type: Types.UPDATE_STUDENT_ERROR,
  }),
  updateStudentReset: () => ({
    type: Types.UPDATE_STUDENT_RESET,
  }),
  deleteStudentRequest: (payload) => ({
    type: Types.DELETE_STUDENT_REQUEST,
    payload,
  }),
  deleteStudentSuccess: () => ({
    type: Types.DELETE_STUDENT_SUCCESS,
  }),
  deleteStudentError: () => ({
    type: Types.DELETE_STUDENT_ERROR,
  }),
};
