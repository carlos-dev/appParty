import { combineReducers } from 'redux';

import toggleMenu from './toggleMenu';
import modalVisible from './modalVisible';
import modalDelete from './modalDelete';
import login from './login';
import register from './register';
import getThematic from './getThematic';
import partyNextHours from './partyNextHours';
import partyHappeningNow from './partyHappeningNow';
import infoParty from './infoParty';
import searchParty from './searchParty';
import profile from './profile';
import updateProfile from './updateProfile';
import uploadAvatar from './uploadAvatar';
import triggerPresence from './triggerPresence';
import deleteUser from './delete';

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
  updateProfile,
  uploadAvatar,
  triggerPresence,
  deleteUser,
  modalDelete,
});
