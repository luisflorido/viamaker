export const Types = {
  LOGIN_REQUEST: 'AUTH/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'AUTH/LOGIN_SUCCESS',
  LOGIN_ERROR: 'AUTH/LOGIN_ERROR',
  LOGOUT: 'AUTH/LOGOUT',
};

const INITIAL_STATE = {
  loading: false,
  error: false,
  data: null,
};

export default function Auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return { ...state, loading: true };
    case Types.LOGIN_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case Types.LOGIN_ERROR:
      return { ...state, loading: false };
    case Types.LOGOUT:
      return { ...state, loading: false, data: null, error: false };
    default:
      return state;
  }
}

export const Creators = {
  loginRequest: (payload) => ({
    type: Types.LOGIN_REQUEST,
    payload,
  }),
  loginSuccess: (payload) => ({
    type: Types.LOGIN_SUCCESS,
    payload,
  }),
  loginError: () => ({
    type: Types.LOGIN_ERROR,
  }),
  logout: () => ({
    type: Types.LOGOUT,
  }),
};
