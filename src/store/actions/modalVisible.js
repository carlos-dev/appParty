// eslint-disable-next-line import/prefer-default-export
export function modalVisible(value) {
  return {
    type: 'MODAL_VISIBLE',
    payload: {
      value,
    },
  };
}
