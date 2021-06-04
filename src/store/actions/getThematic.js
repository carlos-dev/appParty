export const getThematicRequest = (id) => ({
  type: 'GET_THEMATIC_REQUEST',
  payload: {
    id,
  },
});

export const getThematicSuccess = (parties) => ({
  type: 'GET_THEMATIC_SUCCESS',
  payload: {
    parties,
  },
});

export const getThematicFailure = (parties) => ({
  type: 'GET_THEMATIC_FAILURE',
  payload: {
    parties,
  },
});
