import {
  FETCH_COMPANIES_FAILURE,
  FETCH_COMPANIES_SUCCESS,
  FETCH_COMPANIES_REQUESTING
} from "../reducers/companies.ts";

export const FETCH_COMPANIES = 'FETCH_COMPANIES';
import companiesApi from '../api/companies'
import { all, select, put, call, fork } from "redux-saga/effects"
import * as Eff from "redux-saga/effects"

const takeEvery : any = Eff.takeEvery

function *fetchCompanies(){
  const readyStatus = yield select(state => state.companies.readyStatus)

  if(readyStatus === FETCH_COMPANIES_SUCCESS &&
    readyStatus === FETCH_COMPANIES_REQUESTING
  ) {
    return
  }

  yield put({type: FETCH_COMPANIES_REQUESTING});

  try {
    const r = yield call(companiesApi.list);
    const responseJson = r.data
    yield put({type: FETCH_COMPANIES_SUCCESS, data: responseJson})
  } catch (err) {
    console.log(err);
    console.log(typeof err);
    console.log(JSON.stringify(err));
    yield  put({type: FETCH_COMPANIES_FAILURE, err: err })
  }
}

export default [
  takeEvery(FETCH_COMPANIES, fetchCompanies)
]
