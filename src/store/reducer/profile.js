const INITIAL_STATE = {
  profileData: null,
  loading: false,
  error: false,
};

export default function profile(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'PROFILE_REQUEST': {
      return { ...state, loading: true };
    }
    case 'PROFILE_SUCCESS':
      return {
        ...state,
        profileData: action.payload.profileData,
        error: false,
        loading: false,
      };
    case 'PROFILE_FAILURE':
      return {
        profileData: action.payload,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}
