export const updateAvatarRequest = (avatarData) => ({
  type: 'UPDATE_AVATAR_REQUEST',
  payload: {
    avatarData,
  },
});

export const updateAvatarSuccess = (avatarData) => ({
  type: 'UPDATE_AVATAR_SUCCESS',
  payload: {
    avatarData,
  },
});

export const updateAvatarFailure = (avatarData) => ({
  type: 'UPDATE_AVATAR_FAILURE',
  payload: {
    avatarData,
  },
});
