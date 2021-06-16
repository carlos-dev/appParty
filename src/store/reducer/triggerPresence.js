const INITIAL_STATE = {
  presenceData: null,
  loading: false,
  error: false,
};

export default function triggerPresence(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TRIGGER_PRESENCE_REQUEST': {
      return { ...state, loading: true };
    }
    case 'TRIGGER_PRESENCE_SUCCESS':
      return {
        ...state,
        presenceData: action.payload,
        error: false,
        loading: false,
      };
    case 'TRIGGER_PRESENCE_FAILURE':
      return {
        ...state,
        presenceData: action.payload,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}
