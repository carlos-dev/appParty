export const updateProfileRequest = (profileData) => ({
  type: 'UPDATE_PROFILE_REQUEST',
  payload: {
    profileData,
  },
});

export const updateProfileSuccess = (profileData) => ({
  type: 'UPDATE_PROFILE_SUCCESS',
  payload: {
    profileData,
  },
});

export const updateProfileFailure = (profileData) => ({
  type: 'UPDATE_PROFILE_FAILURE',
  payload: {
    profileData,
  },
});
