export const searchPartyRequest = (query) => ({
  type: 'SEARCH_PARTY_REQUEST',
  payload: {
    query,
  },
});

export const searchPartySuccess = (searchPartyData) => ({
  type: 'SEARCH_PARTY_SUCCESS',
  payload: {
    searchPartyData,
  },
});

export const searchPartyFailure = (searchPartyData) => ({
  type: 'SEARCH_PARTY_FAILURE',
  payload: {
    searchPartyData,
  },
});
