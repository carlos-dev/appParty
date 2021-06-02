import { combineReducers } from 'redux';

import toggleMenu from './toggleMenu';
import modalVisible from './modalVisible';
import getParties from './getParties';
import login from './login';

export default combineReducers({
  toggleMenu,
  modalVisible,
  getParties,
  login,
});
