// eslint-disable-next-line import/prefer-default-export
export function modalDelete(value) {
  return {
    type: 'MODAL_DELETE',
    payload: {
      value,
    },
  };
}
