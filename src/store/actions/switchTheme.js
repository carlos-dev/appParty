// eslint-disable-next-line import/prefer-default-export
export function switchTheme(value) {
  return {
    type: 'SWITCH_THEME',
    payload: {
      value,
    },
  };
}
