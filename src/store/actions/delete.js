export const deleteRequest = (deleteData) => ({
  type: 'DELETE_REQUEST',
  payload: {
    deleteData,
  },
});

export const deleteSuccess = (deleteData) => ({
  type: 'DELETE_SUCCESS',
  payload: {
    deleteData,
  },
});

export const deleteFailure = (deleteData) => ({
  type: 'DELETE_FAILURE',
  payload: {
    deleteData,
  },
});
