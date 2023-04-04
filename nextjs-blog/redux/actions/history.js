import {
  FETCH_HISTORY_FAILURE,
  FETCH_HISTORY_SUCCESS,
  FETCH_HISTORY_REQUESTING
} from "../reducers/bookmarks/history";

export const FETCH_HISTORY = 'FETCH_HISTORY';

import { all, select, put, call, fork, takeEvery } from "redux-saga/effects"
import historyAPI from '../api/history';

function *fetchHistory(){
  const readyStatus = yield select(state => state.history.readyStatus)
  const jwt = yield select(state => state.storage.jwt)
  if(readyStatus === FETCH_HISTORY_REQUESTING) return;
  yield put({type: FETCH_HISTORY_REQUESTING});
  try {
    let data = []
    const res = yield call(historyAPI.list, jwt);
    data = res.data.data
    console.log(res)
    yield put({type: FETCH_HISTORY_SUCCESS, data: data,
      ids: res.data.data.map(d => d.p_uid)})
  } catch (err) {
    console.log(err);
    console.log(typeof err);
    console.log(JSON.stringify(err));
    yield  put({type: FETCH_HISTORY_FAILURE, err: err })
  }
}

export default [
  takeEvery(FETCH_HISTORY, fetchHistory)
]
