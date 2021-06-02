import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';

import api from '../../services/api';

import { navigate } from '../../services/navigation';

import * as GetPartiesActions from '../actions/getParties';
import * as LoginActions from '../actions/login';

function* getParties() {
  try {
    const data = yield call(api.get, '/parties');

    console.log('data', data);

    yield put(GetPartiesActions.partiesRequest(data));
  } catch (error) {
    console.log(error);
  }
}

function* login(action) {
  try {
    const { loginData } = action.payload;

    console.log('data', loginData);
    const data = yield call(api.post, '/login', loginData);
    // yield put(LoginActions.loginSuccess(loginData));
  } catch (error) {
    console.log(error);
    yield put(LoginActions.loginFailure(error));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest('PARTIES_REQUEST', getParties),
    takeLatest('LOGIN_REQUEST', login),
  ]);
}
