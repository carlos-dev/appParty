export const forgotRequest = (forgotData) => ({
  type: 'FORGOT_REQUEST',
  payload: {
    forgotData,
  },
});

export const forgotSuccess = (forgotData) => ({
  type: 'FORGOT_SUCCESS',
  payload: {
    forgotData,
  },
});

export const forgotFailure = (forgotData) => ({
  type: 'FORGOT_FAILURE',
  payload: {
    forgotData,
  },
});
