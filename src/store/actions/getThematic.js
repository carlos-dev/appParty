export const getThematicRequest = (id) => ({
  type: 'GET_THEMATIC_REQUEST',
  payload: {
    id,
  },
});

export const getThematicSuccess = (thematicData) => ({
  type: 'GET_THEMATIC_SUCCESS',
  payload: {
    thematicData,
  },
});

export const getThematicFailure = (thematicData) => ({
  type: 'GET_THEMATIC_FAILURE',
  payload: {
    thematicData,
  },
});
