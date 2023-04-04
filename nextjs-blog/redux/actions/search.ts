import {
  SEARCH_FAILURE,
  SEARCH_SUCCESS,
  SEARCH_REQUESTING
} from "../reducers/search";

export const SEARCH = 'SEARCH';

import { select, put, call } from "redux-saga/effects"
import * as Eff from "redux-saga/effects"
import searchAPI from '../api/search'
import {normalize, schema} from 'normalizr';


const takeEvery : any = Eff.takeEvery


const productSch = new schema.Entity(
  'products', {}, {idAttribute: 'id'}
);
const arrayProductSch = new schema.Array(productSch);

const medicalProductSch = new schema.Entity(
  'medicalProducts', {}, {idAttribute: 'deductible_id'}
);
const arrayMedicalProductSch = new schema.Array(medicalProductSch);

function *searchSaga({ body }){
  const readyStatus = yield select(state => state.search.readyStatus)
  if(readyStatus === SEARCH_REQUESTING) return;
  yield put({type: SEARCH_REQUESTING});
  try{
    const json = yield call(searchAPI.search, body)
    let data;
    if(body.cat_id <= 4) {
      const normalizedData = yield call(normalize, json.data.data, arrayProductSch);
      data = normalizedData.entities.products;
    }
    else{
      const normalizedData = yield call(normalize, json.data.data, arrayMedicalProductSch);
      data = normalizedData.entities.medicalProducts;
    }
    if(typeof data === 'undefined') data = {};

    yield put({type: SEARCH_SUCCESS, data: data})
  } catch (err) {
    yield  put({type: SEARCH_FAILURE, err: err })
  }
}

export default [
  takeEvery(SEARCH, searchSaga)
]
