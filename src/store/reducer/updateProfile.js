const INITIAL_STATE = {
  profileData: null,
  loading: false,
  error: false,
};

export default function updateProfile(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'UPDATE_PROFILE_REQUEST': {
      return { ...state, loading: true };
    }
    case 'UPDATE_PROFILE_SUCCESS':
      return {
        ...state,
        profileData: action.payload,
        error: false,
        loading: false,
      };
    case 'UPDATE_PROFILE_FAILURE':
      return {
        ...state,
        profileData: action.payload,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}
