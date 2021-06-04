import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';
import api from '../../services/api';

import * as GetPartiesActions from '../actions/getParties';
import * as LoginActions from '../actions/login';
import * as RegisterActions from '../actions/register';
import * as ForgotPassActions from '../actions/forgotPass';
import * as GetThematicActions from '../actions/getThematic';

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

    console.log('data', data);

    yield put(GetThematicActions.getThematicSuccess(data.parties));
  } catch (error) {
    console.log('getParties_error', error.response);
    yield put(GetThematicActions.getThematicFailure(error.response));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest('GET_THEMATIC_REQUEST', getThematic),
    takeLatest('LOGIN_REQUEST', login),
    takeLatest('REGISTER_REQUEST', register),
    takeLatest('FORGOT_REQUEST', forgotPass),
  ]);
}
