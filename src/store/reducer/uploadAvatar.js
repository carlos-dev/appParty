const INITIAL_STATE = {
  avatarData: null,
  loading: false,
  error: false,
};

export default function updateAvatar(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'UPDATE_AVATAR_REQUEST': {
      return { ...state, loading: true };
    }
    case 'UPDATE_AVATAR_SUCCESS':
      return {
        ...state,
        avatarData: action.payload,
        error: false,
        loading: false,
      };
    case 'UPDATE_AVATAR_FAILURE':
      return {
        ...state,
        avatarData: action.payload,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}
