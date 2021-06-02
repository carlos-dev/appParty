export const registerRequest = (registerData) => ({
  type: 'REGISTER_REQUEST',
  payload: {
    registerData,
  },
});

export const registerSuccess = (registerData) => ({
  type: 'REGISTER_SUCCESS',
  payload: {
    registerData,
  },
});

export const registerFailure = (registerData) => ({
  type: 'REGISTER_FAILURE',
  payload: {
    registerData,
  },
});
