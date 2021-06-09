/* eslint-disable import/prefer-default-export */
export const partiesRequest = (partiesData) => ({
  type: 'PARTIES_REQUEST',
  payload: {
    partiesData,
  },
});
