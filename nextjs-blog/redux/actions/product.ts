import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_REQUESTING
} from "../reducers/product";
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
import productDataApi from '../api/product'
import { select, put, call } from "redux-saga/effects"
import * as Eff from "redux-saga/effects"

const takeEvery : any = Eff.takeEvery

function *fetchProduct({data}){

  const readyStatus = yield select(state => state.product.readyStatus)
  const jwt = yield select(state => state.storage.jwt)

  const idToGroup = {
    7: 1, 8: 5, 9: 1, 10: 2, 11: 3, 12: 4
  }

  console.log("DATA HERE", data)

  if(readyStatus !== FETCH_PRODUCT_SUCCESS) {
    yield put({type: FETCH_PRODUCT_REQUESTING});
  }

  try {
    const cat_id = data.cat_id
    const isMedical = cat_id === 5 || cat_id === 6 || cat_id === 8
    const groupIdx = cat_id <= 6 ? cat_id : idToGroup[cat_id] 
    console.log("groupIdx", groupIdx)

    let r
    if(isMedical) {
      r = yield call(productDataApi.getMedicalProduct, {...data, catId: groupIdx}, jwt);
    }
    else{
      r = yield call(productDataApi.getPolicyProduct, {...data, catId: groupIdx}, jwt);
    }
    const responseJson = isMedical ? [r.data.data] : r.data.data
    yield put({type: FETCH_PRODUCT_SUCCESS, data: responseJson})
  } catch (err) {
    console.log(err);
    console.log(typeof err);
    console.log(JSON.stringify(err));
    yield  put({type: FETCH_PRODUCT_FAILURE, err: err })
  }
}

export default [
  takeEvery(FETCH_PRODUCT, fetchProduct)
]
