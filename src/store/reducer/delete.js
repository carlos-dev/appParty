const INITIAL_STATE = {
  deleteData: null,
  loading: false,
  error: false,
};

export default function updateProfile(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'DELETE_REQUEST': {
      return { ...state, loading: true };
    }
    case 'DELETE_SUCCESS':
      return {
        ...state,
        deleteData: action.payload,
        error: false,
        loading: false,
      };
    case 'DELETE_FAILURE':
      return {
        ...state,
        deleteData: action.payload,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}
