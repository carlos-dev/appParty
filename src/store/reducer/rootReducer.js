import { combineReducers } from 'redux';

import toggleMenu from './toggleMenu';
import modalVisible from './modalVisible';
import login from './login';
import register from './register';
import getThematic from './getThematic';
import partyNextHours from './partyNextHours';
import partyHappeningNow from './partyHappeningNow';
import infoParty from './infoParty';
import searchParty from './searchParty';
import profile from './profile';

export default combineReducers({
  toggleMenu,
  modalVisible,
  login,
  register,
  getThematic,
  partyNextHours,
  partyHappeningNow,
  infoParty,
  searchParty,
  profile,
});
