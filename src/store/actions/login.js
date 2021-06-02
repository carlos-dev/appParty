export const loginRequest = (loginData) => ({
  type: 'LOGIN_REQUEST',
  payload: {
    loginData,
  },
});

export const loginSuccess = (loginData) => ({
  type: 'LOGIN_SUCCESS',
  payload: {
    token: loginData,
  },
});

export const loginFailure = (loginData) => ({
  type: 'LOGIN_FAILURE',
  payload: {
    loginData,
  },
});
