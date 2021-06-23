const INITIAL_STATE = {
  modalDelete: false,
};

export default function modalDelete(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'MODAL_DELETE':
      return {
        modalDelete: action.payload.value,
      };
    default:
      return state;
  }
}
