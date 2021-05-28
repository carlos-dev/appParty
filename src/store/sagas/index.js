import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';

import api from '../../services/api';

import * as GetPartiesActions from '../actions/getParties';

function* getParties() {
  try {
    const data = yield call(api.get, '/parties');

    console.log('data', data);

    yield put(GetPartiesActions.partiesRequest(data));
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest('PARTIES_REQUEST', getParties),
  ]);
}
