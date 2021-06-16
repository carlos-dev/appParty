export const triggerPresenceRequest = (slug) => ({
  type: 'TRIGGER_PRESENCE_REQUEST',
  payload: {
    slug,
  },
});

export const triggerPresenceSuccess = (presenceData) => ({
  type: 'TRIGGER_PRESENCE_SUCCESS',
  payload: {
    presenceData,
  },
});

export const triggerPresenceFailure = (presenceData) => ({
  type: 'TRIGGER_PRESENCE_FAILURE',
  payload: {
    presenceData,
  },
});
