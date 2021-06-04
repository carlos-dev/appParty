const INITIAL_STATE = {
  parties: null,
  loading: true,
  error: false,
};

export default function partyNextHours(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'PARTY_NEXT_HOURS_REQUEST': {
      return { ...state, loading: true };
    }
    case 'PARTY_NEXT_HOURS_SUCCESS':
      return {
        ...state,
        parties: action.payload.parties,
        error: false,
        loading: false,
      };
    case 'PARTY_NEXT_HOURS_FAILURE':
      return {
        parties: action.payload,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}
