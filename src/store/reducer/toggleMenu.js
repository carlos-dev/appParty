const INITIAL_STATE = {
  toggleMenu: false,
};

export default function toggleMenu(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        toggleMenu: action.payload.value,
      };
    default:
      return state;
  }
}
