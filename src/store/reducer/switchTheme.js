const INITIAL_STATE = {
  switchTheme: 'dark',
};

export default function switchTheme(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SWITCH_THEME':
      return {
        switchTheme: action.payload.value,
      };
    default:
      return state;
  }
}
