import { combineReducers } from 'redux';

import toggleMenu from './toggleMenu';
import modalVisible from './modalVisible';
import getParties from './getParties';

export default combineReducers({
  toggleMenu,
  modalVisible,
  getParties,
});
