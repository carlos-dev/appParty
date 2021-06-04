const INITIAL_STATE = {
  parties: null,
  loading: true,
  error: false,
};

export default function partyHappeningNow(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'PARTY_HAPPENING_NOW_REQUEST': {
      return { ...state, loading: true };
    }
    case 'PARTY_HAPPENING_NOW_SUCCESS':
      return {
        ...state,
        parties: action.payload.parties,
        error: false,
        loading: false,
      };
    case 'PARTY_HAPPENING_NOW_FAILURE':
      return {
        parties: action.payload,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}
