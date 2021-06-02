const INITIAL_STATE = {
  registerData: null,
  loading: false,
  error: false,
};

export default function register(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REGISTER_REQUEST': {
      return { ...state, loading: true };
    }
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        registerData: action.payload,
        error: false,
        loading: false,
      };
    case 'REGISTER_FAILURE':
      return {
        ...state,
        registerData: action.payload,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}
