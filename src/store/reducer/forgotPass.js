const INITIAL_STATE = {
  login: null,
  loading: false,
  error: false,
};

export default function forgotPass(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FORGOT_REQUEST': {
      return { ...state, loading: true };
    }
    case 'FORGOT_SUCCESS':
      return {
        ...state,
        forgot: action.payload,
        error: false,
        loading: false,
      };
    case 'FORGOT_FAILURE':
      return {
        forgot: action.payload,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}
