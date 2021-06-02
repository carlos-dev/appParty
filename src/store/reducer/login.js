const INITIAL_STATE = {
  login: null,
  loading: false,
  error: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST': {
      return { ...state, loading: true };
    }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        login: action.payload,
        error: false,
        loading: false,
      };
    case 'LOGIN_FAILURE':
      return {
        login: action.payload,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}
