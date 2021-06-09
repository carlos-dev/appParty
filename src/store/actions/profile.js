export const profileRequest = (profileData) => ({
  type: 'PROFILE_REQUEST',
  payload: {
    profileData,
  },
});

export const profileSuccess = (profileData) => ({
  type: 'PROFILE_SUCCESS',
  payload: {
    profileData,
  },
});

export const profileFailure = (profileData) => ({
  type: 'PROFILE_FAILURE',
  payload: {
    profileData,
  },
});
