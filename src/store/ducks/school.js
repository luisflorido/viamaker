export const Types = {
  LOAD_SCHOOLS_REQUEST: 'SCHOOL/LOAD_SCHOOLS_REQUEST',
  LOAD_SCHOOLS_SUCCESS: 'SCHOOL/LOAD_SCHOOLS_SUCCESS',
  LOAD_SCHOOLS_ERROR: 'SCHOOL/LOAD_SCHOOLS_ERROR',

  LOAD_SCHOOL_REQUEST: 'SCHOOL/LOAD_SCHOOL_REQUEST',
  LOAD_SCHOOL_SUCCESS: 'SCHOOL/LOAD_SCHOOL_SUCCESS',
  LOAD_SCHOOL_ERROR: 'SCHOOL/LOAD_SCHOOL_ERROR',

  CREATE_SCHOOL_REQUEST: 'SCHOOL/CREATE_SCHOOL_REQUEST',
  CREATE_SCHOOL_SUCCESS: 'SCHOOL/CREATE_SCHOOL_SUCCESS',
  CREATE_SCHOOL_ERROR: 'SCHOOL/CREATE_SCHOOL_ERROR',
  CREATE_SCHOOL_RESET: 'SCHOOL/CREATE_SCHOOL_RESET',

  UPDATE_SCHOOL_REQUEST: 'SCHOOL/UPDATE_SCHOOL_REQUEST',
  UPDATE_SCHOOL_SUCCESS: 'SCHOOL/UPDATE_SCHOOL_SUCCESS',
  UPDATE_SCHOOL_ERROR: 'SCHOOL/UPDATE_SCHOOL_ERROR',
  UPDATE_SCHOOL_RESET: 'SCHOOL/UPDATE_SCHOOL_RESET',

  DELETE_SCHOOL_REQUEST: 'SCHOOL/DELETE_SCHOOL_REQUEST',
  DELETE_SCHOOL_SUCCESS: 'SCHOOL/DELETE_SCHOOL_SUCCESS',
  DELETE_SCHOOL_ERROR: 'SCHOOL/DELETE_SCHOOL_ERROR',
};

const INITIAL_STATE = {
  loading: false,
  error: false,
  data: null,
  school: null,
  createSuccess: null,
  updateSuccess: null,
  deleteSuccess: null,
};

export default function School(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_SCHOOLS_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_SCHOOLS_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case Types.LOAD_SCHOOLS_ERROR:
      return { ...state, loading: false };
    case Types.LOAD_SCHOOL_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_SCHOOL_SUCCESS:
      return { ...state, school: action.payload, loading: false };
    case Types.LOAD_SCHOOL_ERROR:
      return { ...state, loading: false };
    case Types.CREATE_SCHOOL_REQUEST:
      return { ...state, loading: true, createSuccess: null };
    case Types.CREATE_SCHOOL_SUCCESS:
      return { ...state, loading: false, createSuccess: true };
    case Types.CREATE_SCHOOL_ERROR:
      return { ...state, loading: false, createSuccess: false };
    case Types.CREATE_SCHOOL_RESET:
      return { ...state, loading: false, createSuccess: null };
    case Types.UPDATE_SCHOOL_REQUEST:
      return { ...state, loading: true, updateSuccess: null };
    case Types.UPDATE_SCHOOL_SUCCESS:
      return { ...state, loading: false, updateSuccess: true };
    case Types.UPDATE_SCHOOL_RESET:
      return { ...state, loading: false, updateSuccess: null };
    case Types.UPDATE_SCHOOL_ERROR:
      return { ...state, loading: false, updateSuccess: false };
    case Types.DELETE_SCHOOL_REQUEST:
      return { ...state, loading: true, deleteSuccess: null };
    case Types.DELETE_SCHOOL_SUCCESS:
      return { ...state, loading: false, deleteSuccess: true };
    case Types.DELETE_SCHOOL_ERROR:
      return { ...state, loading: false, deleteSuccess: false };
    default:
      return state;
  }
}

export const Creators = {
  loadSchoolsRequest: () => ({
    type: Types.LOAD_SCHOOLS_REQUEST,
  }),
  loadSchoolsSuccess: (payload) => ({
    type: Types.LOAD_SCHOOLS_SUCCESS,
    payload,
  }),
  loadSchoolsError: () => ({
    type: Types.LOAD_SCHOOLS_ERROR,
  }),
  loadSchoolRequest: (payload) => ({
    type: Types.LOAD_SCHOOL_REQUEST,
    payload,
  }),
  loadSchoolSuccess: (payload) => ({
    type: Types.LOAD_SCHOOL_SUCCESS,
    payload,
  }),
  loadSchoolError: () => ({
    type: Types.LOAD_SCHOOL_ERROR,
  }),
  createSchoolRequest: (payload) => ({
    type: Types.CREATE_SCHOOL_REQUEST,
    payload,
  }),
  createSchoolSuccess: () => ({
    type: Types.CREATE_SCHOOL_SUCCESS,
  }),
  createSchoolError: () => ({
    type: Types.CREATE_SCHOOL_ERROR,
  }),
  createSchoolReset: () => ({
    type: Types.CREATE_SCHOOL_RESET,
  }),
  updateSchoolRequest: (payload) => ({
    type: Types.UPDATE_SCHOOL_REQUEST,
    payload,
  }),
  updateSchoolSuccess: () => ({
    type: Types.UPDATE_SCHOOL_SUCCESS,
  }),
  updateSchoolError: () => ({
    type: Types.UPDATE_SCHOOL_ERROR,
  }),
  updateSchoolReset: () => ({
    type: Types.UPDATE_SCHOOL_RESET,
  }),
  deleteSchoolRequest: (payload) => ({
    type: Types.DELETE_SCHOOL_REQUEST,
    payload,
  }),
  deleteSchoolSuccess: () => ({
    type: Types.DELETE_SCHOOL_SUCCESS,
  }),
  deleteSchoolError: () => ({
    type: Types.DELETE_SCHOOL_ERROR,
  }),
};
