export const Types = {
  LOAD_CLASSES_REQUEST: 'CLASS/LOAD_CLASSES_REQUEST',
  LOAD_CLASSES_SUCCESS: 'CLASS/LOAD_CLASSES_SUCCESS',
  LOAD_CLASSES_ERROR: 'CLASS/LOAD_CLASSES_ERROR',

  LOAD_CLASS_REQUEST: 'CLASS/LOAD_CLASS_REQUEST',
  LOAD_CLASS_SUCCESS: 'CLASS/LOAD_CLASS_SUCCESS',
  LOAD_CLASS_ERROR: 'CLASS/LOAD_CLASS_ERROR',

  CREATE_CLASS_REQUEST: 'CLASS/CREATE_CLASS_REQUEST',
  CREATE_CLASS_SUCCESS: 'CLASS/CREATE_CLASS_SUCCESS',
  CREATE_CLASS_ERROR: 'CLASS/CREATE_CLASS_ERROR',
  CREATE_CLASS_RESET: 'CLASS/CREATE_CLASS_RESET',

  UPDATE_CLASS_REQUEST: 'CLASS/UPDATE_CLASS_REQUEST',
  UPDATE_CLASS_SUCCESS: 'CLASS/UPDATE_CLASS_SUCCESS',
  UPDATE_CLASS_ERROR: 'CLASS/UPDATE_CLASS_ERROR',
  UPDATE_CLASS_RESET: 'CLASS/UPDATE_CLASS_RESET',

  DELETE_CLASS_REQUEST: 'CLASS/DELETE_CLASS_REQUEST',
  DELETE_CLASS_SUCCESS: 'CLASS/DELETE_CLASS_SUCCESS',
  DELETE_CLASS_ERROR: 'CLASS/DELETE_CLASS_ERROR',
};

const INITIAL_STATE = {
  loading: false,
  error: false,
  data: null,
  classObj: null,
  createSuccess: null,
  updateSuccess: null,
  deleteSuccess: null,
};

export default function Class(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_CLASSES_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_CLASSES_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case Types.LOAD_CLASSES_ERROR:
      return { ...state, loading: false };
    case Types.LOAD_CLASS_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_CLASS_SUCCESS:
      return { ...state, classObj: action.payload, loading: false };
    case Types.LOAD_CLASS_ERROR:
      return { ...state, loading: false };
    case Types.CREATE_CLASS_REQUEST:
      return { ...state, loading: true, createSuccess: null };
    case Types.CREATE_CLASS_SUCCESS:
      return { ...state, loading: false, createSuccess: true };
    case Types.CREATE_CLASS_ERROR:
      return { ...state, loading: false, createSuccess: false };
    case Types.CREATE_CLASS_RESET:
      return { ...state, loading: false, createSuccess: null };
    case Types.UPDATE_CLASS_REQUEST:
      return { ...state, loading: true, updateSuccess: null };
    case Types.UPDATE_CLASS_SUCCESS:
      return { ...state, loading: false, updateSuccess: true };
    case Types.UPDATE_CLASS_RESET:
      return { ...state, loading: false, updateSuccess: null };
    case Types.UPDATE_CLASS_ERROR:
      return { ...state, loading: false, updateSuccess: false };
    case Types.DELETE_CLASS_REQUEST:
      return { ...state, loading: true, deleteSuccess: null };
    case Types.DELETE_CLASS_SUCCESS:
      return { ...state, loading: false, deleteSuccess: true };
    case Types.DELETE_CLASS_ERROR:
      return { ...state, loading: false, deleteSuccess: false };
    default:
      return state;
  }
}

export const Creators = {
  loadClassesRequest: (payload) => ({
    type: Types.LOAD_CLASSES_REQUEST,
    payload,
  }),
  loadClassesSuccess: (payload) => ({
    type: Types.LOAD_CLASSES_SUCCESS,
    payload,
  }),
  loadClassesError: () => ({
    type: Types.LOAD_CLASSES_ERROR,
  }),
  loadClassRequest: (payload) => ({
    type: Types.LOAD_CLASS_REQUEST,
    payload,
  }),
  loadClassSuccess: (payload) => ({
    type: Types.LOAD_CLASS_SUCCESS,
    payload,
  }),
  loadClassError: () => ({
    type: Types.LOAD_CLASS_ERROR,
  }),
  createClassRequest: (payload) => ({
    type: Types.CREATE_CLASS_REQUEST,
    payload,
  }),
  createClassSuccess: () => ({
    type: Types.CREATE_CLASS_SUCCESS,
  }),
  createClassError: () => ({
    type: Types.CREATE_CLASS_ERROR,
  }),
  createClassReset: () => ({
    type: Types.CREATE_CLASS_RESET,
  }),
  updateClassRequest: (payload) => ({
    type: Types.UPDATE_CLASS_REQUEST,
    payload,
  }),
  updateClassSuccess: () => ({
    type: Types.UPDATE_CLASS_SUCCESS,
  }),
  updateClassError: () => ({
    type: Types.UPDATE_CLASS_ERROR,
  }),
  updateClassReset: () => ({
    type: Types.UPDATE_CLASS_RESET,
  }),
  deleteClassRequest: (payload) => ({
    type: Types.DELETE_CLASS_REQUEST,
    payload,
  }),
  deleteClassSuccess: () => ({
    type: Types.DELETE_CLASS_SUCCESS,
  }),
  deleteClassError: () => ({
    type: Types.DELETE_CLASS_ERROR,
  }),
};
