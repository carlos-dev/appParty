const INITIAL_STATE = {
  modalVisible: false,
};

export default function modalVisible(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'MODAL_VISIBLE':
      return {
        modalVisible: action.payload.value,
      };
    default:
      return state;
  }
}
