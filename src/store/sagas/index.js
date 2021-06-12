import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';
import api from '../../services/api';

import * as LoginActions from '../actions/login';
import * as RegisterActions from '../actions/register';
import * as ForgotPassActions from '../actions/forgotPass';
import * as GetThematicActions from '../actions/getThematic';
import * as PartyNextHoursActions from '../actions/partyNextHours';
import * as PartyHappeningNowActions from '../actions/partyHappeningNow';
import * as GetInfoPartyActions from '../actions/infoParty';
import * as SearchPartyActions from '../actions/searchParty';
import * as ProfileActions from '../actions/profile';
import * as UpdateProfileActions from '../actions/updateProfile';

function* register(action) {
  try {
    const { registerData } = action.payload;

    const data = yield call(api.post, '/signup', registerData);
    console.log(data);

    yield put(RegisterActions.registerSuccess(data.status));
  } catch (error) {
    console.log('saga_register', error.response);

    yield put(RegisterActions.registerFailure(error.response.status));
  }
}

function* login(action) {
  try {
    const { loginData } = action.payload;

    const { data } = yield call(api.post, '/login', loginData);
    yield put(LoginActions.loginSuccess(data.token));

    // yield put(CommonActions.navigate({ routeName: 'Main' }));
    // navigate('Main');
  } catch (error) {
    console.log(error.error);
    yield put(LoginActions.loginFailure(error.response.status));
  }
}

function* forgotPass(action) {
  try {
    const { forgot } = action.payload;

    const { data } = yield call(api.post, '/forgot-password', forgot);
    yield put(ForgotPassActions.forgotSuccess(data));

    console.log(data);
  } catch (error) {
    console.log(error.error);
    yield put(ForgotPassActions.forgotFailure(error.response.status));
  }
}

function* getThematic(action) {
  try {
    const { id } = action.payload;

    const { data } = yield call(api.get, `/dashboard/tematicas?page=${id}`);

    yield put(GetThematicActions.getThematicSuccess(data.parties));
  } catch (error) {
    console.log('getThematic_error', error.response);
    yield put(GetThematicActions.getThematicFailure(error.response));
  }
}

function* getPartyNextHours(action) {
  try {
    const { id } = action.payload;

    const { data } = yield call(api.get, `/dashboard/proximas-horas?page=${id}`);

    console.log('data', data);

    yield put(PartyNextHoursActions.partyNextHoursSuccess(data.parties));
  } catch (error) {
    console.log('getPartyNextHours_error', error.response);
    yield put(PartyNextHoursActions.partyNextHoursFailure(error.response));
  }
}

function* getPartyHappeningNow(action) {
  try {
    const { id } = action.payload;

    const { data } = yield call(api.get, `/dashboard/acontecendo-agora?page=${id}`);

    console.log('getPartyHappeningNow', data);

    yield put(PartyHappeningNowActions.partyHappeningNowSuccess(data.parties));
  } catch (error) {
    console.log('getPartyNextHours_error', error.response);
    yield put(PartyHappeningNowActions.partyHappeningNowFailure(error.response));
  }
}

function* getInfoParty(action) {
  try {
    const { slug } = action.payload;

    const { data } = yield call(api.get, `/dashboard/party/${slug}`);

    console.log('getInfoParty', data);

    yield put(GetInfoPartyActions.infoPartySuccess(data.single));
  } catch (error) {
    console.log('getPartyNextHours_error', error.response);
    yield put(GetInfoPartyActions.infoPartyFailure(error.response));
  }
}

function* searchParty(action) {
  try {
    const { query } = action.payload;

    const { data } = yield call(api.get, `/dashboard/search?query=${query}`);

    yield put(SearchPartyActions.searchPartySuccess(data.parties));
  } catch (error) {
    console.log('searchParty_error', error.response);
    yield put(SearchPartyActions.searchPartyFailure(error.response));
  }
}

function* profile() {
  try {
    const { data } = yield call(api.get, '/dashboard/profile');

    yield put(ProfileActions.profileSuccess(data.user));
  } catch (error) {
    console.log('profile_error', error.response);
    yield put(ProfileActions.profileFailure(error.response));
  }
}

function* updateProfile(action) {
  const { profileData } = action.payload;

  try {
    const { data } = yield call(api.post, '/dashboard/profile/update', profileData);

    yield put(UpdateProfileActions.updateProfileSuccess(data));

    console.log(data);
  } catch (error) {
    console.log('updadeProfile_error', error.response);
    yield put(UpdateProfileActions.updateProfileFailure(error.response));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest('LOGIN_REQUEST', login),
    takeLatest('REGISTER_REQUEST', register),
    takeLatest('GET_THEMATIC_REQUEST', getThematic),
    takeLatest('PARTY_NEXT_HOURS_REQUEST', getPartyNextHours),
    takeLatest('PARTY_HAPPENING_NOW_REQUEST', getPartyHappeningNow),
    takeLatest('INFO_PARTY_REQUEST', getInfoParty),
    takeLatest('FORGOT_REQUEST', forgotPass),
    takeLatest('SEARCH_PARTY_REQUEST', searchParty),
    takeLatest('PROFILE_REQUEST', profile),
    takeLatest('UPDATE_PROFILE_REQUEST', updateProfile),
  ]);
}
