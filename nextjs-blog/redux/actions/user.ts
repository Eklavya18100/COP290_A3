import {
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUESTING
} from "../reducers/user";

export const FETCH_USER = 'FETCH_USER';
import userApi from '../api/user'
import { all, select, put, call, fork } from "redux-saga/effects"
import * as Eff from "redux-saga/effects"
 
const takeEvery : any = Eff.takeEvery

function *fetchUser(){
  const readyStatus = yield select(state => state.user.readyStatus)
  const jwt = yield select(state => state.storage.jwt)
  // alert(jwt);
  if(readyStatus !== FETCH_USER_SUCCESS) {
    yield put({type: FETCH_USER_REQUESTING});
  }
  try {
    const r = yield call(userApi.get, jwt);
    const res = r.data.data
    if(res['updated_quota'] > 0){

    }
    yield put({type: FETCH_USER_SUCCESS, data: {
        freeQuota: parseInt(res['free_quota']),
        paidQuota: parseInt(res['paid_quota']),
        accQuota: parseInt(res['acc_quota']),
        lastFreeQuotaUpdateDate: res['last_update_quota'],
        lastPurchaseDate: res['last_purchase_date'],
        updatedQuota: res['updated_quota'],
        isAdmin: res['is_admin'],
        email: res.email,
        username: res.username,
        phone: res.phone
    }})
  } catch (err) {
    yield  put({type: FETCH_USER_FAILURE, err: err })
  }
}


export default [
  takeEvery(FETCH_USER, fetchUser)
]
