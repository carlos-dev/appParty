const INITIAL_STATE = {
  searchPartyData: [],
  loading: false,
  error: false,
};

export default function searchParty(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SEARCH_PARTY_REQUEST': {
      return { ...state, loading: true };
    }
    case 'SEARCH_PARTY_SUCCESS':
      return {
        ...state,
        searchPartyData: action.payload.searchPartyData,
        error: false,
        loading: false,
      };
    case 'SEARCH_PARTY_FAILURE':
      return {
        searchPartyData: action.payload,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}
