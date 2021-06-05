export const infoPartyRequest = (slug) => ({
  type: 'INFO_PARTY_REQUEST',
  payload: {
    slug,
  },
});

export const infoPartySuccess = (party) => ({
  type: 'INFO_PARTY_SUCCESS',
  payload: {
    party,
  },
});

export const infoPartyFailure = (party) => ({
  type: 'INFO_PARTY_FAILURE',
  payload: {
    party,
  },
});
