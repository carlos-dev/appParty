export const partyHappeningNowRequest = (id) => ({
  type: 'PARTY_HAPPENING_NOW_REQUEST',
  payload: {
    id,
  },
});

export const partyHappeningNowSuccess = (parties) => ({
  type: 'PARTY_HAPPENING_NOW_SUCCESS',
  payload: {
    parties,
  },
});

export const partyHappeningNowFailure = (parties) => ({
  type: 'PARTY_HAPPENING_NOW_FAILURE',
  payload: {
    parties,
  },
});
