export const partyNextHoursRequest = (id) => ({
  type: 'PARTY_NEXT_HOURS_REQUEST',
  payload: {
    id,
  },
});

export const partyNextHoursSuccess = (parties) => ({
  type: 'PARTY_NEXT_HOURS_SUCCESS',
  payload: {
    parties,
  },
});

export const partyNextHoursFailure = (parties) => ({
  type: 'PARTY_NEXT_HOURS_FAILURE',
  payload: {
    parties,
  },
});
