import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';
import { CommonActions } from '@react-navigation/native';

import api from '../../services/api';

import { navigate } from '../../services/navigation';

import * as GetPartiesActions from '../actions/getParties';
import * as LoginActions from '../actions/login';
import * as RegisterActions from '../actions/register';
import * as ForgotPassActions from '../actions/forgotPass';

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

function* getParties() {
  try {
    const data = yield call(api.get, '/parties');

    console.log('data', data);

    yield put(GetPartiesActions.partiesRequest(data));
  } catch (error) {
    console.log('getParties_error', error.response);
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest('PARTIES_REQUEST', getParties),
    takeLatest('LOGIN_REQUEST', login),
    takeLatest('REGISTER_REQUEST', register),
    takeLatest('FORGOT_REQUEST', forgotPass),
  ]);
}
