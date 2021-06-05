const INITIAL_STATE = {
  party: null,
  loading: true,
  error: false,
};

export default function infoParty(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INFO_PARTY_REQUEST': {
      return { ...state, loading: true };
    }
    case 'INFO_PARTY_SUCCESS':
      return {
        ...state,
        party: action.payload.party,
        error: false,
        loading: false,
      };
    case 'INFO_PARTY_FAILURE':
      return {
        party: action.payload,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}
