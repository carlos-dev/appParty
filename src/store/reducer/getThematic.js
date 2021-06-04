const INITIAL_STATE = {
  thematicData: null,
  loading: true,
  error: false,
};

export default function getThematic(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_THEMATIC_REQUEST': {
      return { ...state, loading: true };
    }
    case 'GET_THEMATIC_SUCCESS':
      return {
        ...state,
        thematicData: action.payload.thematicData,
        error: false,
        loading: false,
      };
    case 'GET_THEMATIC_FAILURE':
      return {
        thematicData: action.payload,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}
