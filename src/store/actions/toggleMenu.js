export function toggleMenu(value) {
  return {
    type: 'TOGGLE_MENU',
    payload: {
      value,
    },
  };
}
