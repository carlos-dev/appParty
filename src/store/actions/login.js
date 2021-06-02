export const loginRequest = (loginData) => ({
  type: 'LOGIN_REQUEST',
  payload: {
    loginData,
  },
});

export const loginSuccess = (loginData) => ({
  type: 'LOGIN_SUCCESS',
  payload: {
    email: loginData.email,
    password: loginData.password,
  },
});

export const loginFailure = (loginData) => ({
  type: 'LOGIN_FAILURE',
  payload: {
    loginData,
  },
});
