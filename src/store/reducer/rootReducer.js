import { combineReducers } from 'redux';

import toggleMenu from './toggleMenu';
import modalVisible from './modalVisible';

export default combineReducers({
  toggleMenu,
  modalVisible,
});
