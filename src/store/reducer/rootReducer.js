import { combineReducers } from 'redux';

import toggleMenu from './toggleMenu';
import modalVisible from './modalVisible';
import getParties from './getParties';
import login from './login';
import register from './register';
import getThematic from './getThematic';
// import forgotPass from './forgotPass';

export default combineReducers({
  toggleMenu,
  modalVisible,
  getParties,
  login,
  register,
  getThematic,
});
