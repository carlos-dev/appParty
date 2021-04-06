// eslint-disable-next-line import/prefer-default-export
export function toggleMenu(value) {
  return {
    type: 'TOGGLE_MENU',
    payload: {
      value,
    },
  };
}
