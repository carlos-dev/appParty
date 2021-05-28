const INITIAL_STATE = {
  profileData: null,
  loading: false,
  error: false,
};

export default function getParties(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'PARTIES_REQUEST': {
      console.log('action', action);
      return { ...state, loading: true };
    }
    default:
      return state;
  }
}
