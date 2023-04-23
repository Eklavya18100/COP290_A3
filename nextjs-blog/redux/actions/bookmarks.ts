import {
  FETCH_BOOKMARKS_FAILURE,
  FETCH_BOOKMARKS_SUCCESS,
  FETCH_BOOKMARKS_REQUESTING, APPEND_BOOKMARK_CACHE,
  REMOVE_BOOKMARK_CACHE
} from '../reducers/bookmarks/bookmarks';
import { ADD_BOOKMARK_FAILURE, ADD_BOOKMARK_SUCCESS,
 ADD_BOOKMARK_REQUESTING} from '../reducers/bookmarks/addBookmark';
import { REMOVE_BOOKMARK_REQUESTING, REMOVE_BOOKMARK_SUCCESS,
REMOVE_BOOKMARK_FAILURE} from '../reducers/bookmarks/removeBookmark';

export const FETCH_BOOKMARKS = 'FETCH_BOOKMARKS';
export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';

import { all, select, put, call, fork } from "redux-saga/effects"
import bookmarksAPI from '../api/bookmarks';

import * as Eff from "redux-saga/effects"
const takeEvery:any = Eff.takeEvery

function *fetchBookmarks(){
  const readyStatus = yield select(state => state.bookmarks.readyStatus)
  const jwt = yield select(state => state.storage.jwt)
  if(readyStatus === FETCH_BOOKMARKS_REQUESTING) return;
  yield put({type: FETCH_BOOKMARKS_REQUESTING});
  try {
    const res = yield call(bookmarksAPI.list, jwt );
    yield put({type: FETCH_BOOKMARKS_SUCCESS, data: res.data.data,
      ids: res.data.data.map(d => d.p_uid)})
  } catch (err) {
    console.log(err);
    yield  put({type: FETCH_BOOKMARKS_FAILURE, err: err })
  }
}

function *addBookmark({ product }) {
  console.log("addproduct", product)
  const params = {
    productId: product.p_iid,
    productGender: product.p_gender,
    smokingStatus: product.p_smoking_st,
    lowerAge: product.p_lower_age,
    paymentTerm: product.p_payment_term,
    sumInsured: product.p_sum_ins,
    annPremium: product.p_ann_pre,
    room: product.room,
    medicalBenefit: product.medical_benefit,
    geographicCoverage: product.geographic_coverage,
    deductible: product.deductible
  }
  yield put({type: APPEND_BOOKMARK_CACHE, data: product})
  const readyStatus = yield select(state => state.addBookmark.readyStatus)
  const jwt = yield select(state => state.storage.jwt)
  if (readyStatus === ADD_BOOKMARK_REQUESTING) return;
  yield put({type: ADD_BOOKMARK_REQUESTING});
  try {
    let data = []
    const res = yield call(bookmarksAPI.add, jwt, params);
    data = res.data.data
    const ids = data.map(d => d.p_uid)
    yield all([
      put({type: ADD_BOOKMARK_SUCCESS, data: 'ok' }),
      put({type: FETCH_BOOKMARKS_SUCCESS, data: data,
        ids: ids  })
    ])
  } catch (err) {
    console.log(err);
    yield put({type: REMOVE_BOOKMARK_CACHE, data: product})
    yield  put({type: ADD_BOOKMARK_FAILURE, err: err})
  }
}

function *removeBookmark({ product }) {
  const params = {
    productId: product.p_iid,
    productGender: product.p_gender,
    smokingStatus: product.p_smoking_st,
    lowerAge: product.p_lower_age,
    paymentTerm: product.p_payment_term,
    sumInsured: product.p_sum_ins,
    annPremium: product.p_ann_pre,
    room: product.room,
    medicalBenefit: product.medical_benefit,
    geographicCoverage: product.geographic_coverage,
    deductible: product.deductible
  }
  yield put({type: REMOVE_BOOKMARK_CACHE, data: product})
  const readyStatus = yield select(state => state.removeBookmark.readyStatus)
  const jwt = yield select(state => state.storage.jwt)
  if (readyStatus === REMOVE_BOOKMARK_REQUESTING) return;
  yield put({type: REMOVE_BOOKMARK_REQUESTING});
  try {
    let data = []
    const res = yield call(bookmarksAPI.remove, jwt, params);
    data = res.data.data
    yield all([
      put({type: REMOVE_BOOKMARK_SUCCESS, data: 'ok' }),
      put({type: FETCH_BOOKMARKS_SUCCESS, data: data })
    ])
  } catch (err) {
    console.error(err);
    yield put({type: APPEND_BOOKMARK_CACHE, data: product})
    yield  put({type: REMOVE_BOOKMARK_FAILURE, err: err})
  }

}

export default [
  takeEvery(FETCH_BOOKMARKS, fetchBookmarks),
  takeEvery(ADD_BOOKMARK, addBookmark),
  takeEvery(REMOVE_BOOKMARK, removeBookmark)
]
