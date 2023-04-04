import {
  SEND_RESET_PW_MAIL_FAILURE,
  SEND_RESET_PW_MAIL_SUCCESS,
  SEND_RESET_PW_MAIL_REQUESTING
} from "../../reducers/iam/sendResetPwMail";

import {
  CODE_LOGIN_FAILURE,
  CODE_LOGIN_SUCCESS,
  CODE_LOGIN_REQUESTING,
  CODE_LOGIN_INVALID
} from '../../reducers/iam/codeLogin';

import {
  RESET_PW_FAILURE,
  RESET_PW_SUCCESS,
  RESET_PW_REQUESTING,
  RESET_PW_INVALID
} from '../../reducers/iam/resetPw';

export const SEND_RESET_PW_MAIL = 'SEND_RESET_PW_MAIL';
export const RESET_PW = 'RESET_PW'
export const CODE_LOGIN = 'CODE_LOGIN'


import { all, select, put, call, fork } from "redux-saga/effects"
import iamAPI from '../../api/iam';
import {SET_AUTH_MODAL_PAGE} from '../../reducers/ux';
import authModalPages from '../../../constants/authModalPages';
import * as Eff from 'redux-saga/effects';
const takeEvery : any = Eff.takeEvery

function *sendResetPwMail({ data }){
  const readyStatus = yield select(state => state.sendResetPwMail.readyStatus)
  if(readyStatus === SEND_RESET_PW_MAIL_REQUESTING) return;
  yield put({type: SEND_RESET_PW_MAIL_REQUESTING, email: data.email });
  try {
    const res = yield call(iamAPI.sendResetPwMail, data);
    yield put({type: SEND_RESET_PW_MAIL_SUCCESS, data: res.data.data})
    yield put({ type: SET_AUTH_MODAL_PAGE, value: authModalPages.RESET_PASSWORD_INPUT_CODE})
  } catch (err) {
    yield  put({type: SEND_RESET_PW_MAIL_FAILURE, err: err })
  }
}

function *codeLogin({ data }){
  const readyStatus = yield select(state => state.codeLogin.readyStatus)

  if(readyStatus === CODE_LOGIN_REQUESTING) return;
  yield put({type: CODE_LOGIN_REQUESTING});
  try {
    const res = yield call(iamAPI.codeLogin, data);
 
    yield put({type: CODE_LOGIN_SUCCESS, data: res.data.data})
    yield put({ type: SET_AUTH_MODAL_PAGE, value: authModalPages.ENTER_NEW_PASSWORD})
  } catch (err) {
    yield  put({type: CODE_LOGIN_FAILURE, err: err })
  }
}

function *resetPw({ data }){
  const readyStatus = yield select(state => state.resetPw.readyStatus)
  const jwt = yield select(state => state.storage.jwt)
  if(readyStatus === RESET_PW_REQUESTING) return;
  yield put({type: RESET_PW_REQUESTING});
  try {
    const res = yield call(iamAPI.newPassword, data);

    yield put({type: RESET_PW_SUCCESS, data: res.data.data})
  } catch (err) {

    yield  put({type: RESET_PW_FAILURE, err: err })
  }
}

export default [
  takeEvery(SEND_RESET_PW_MAIL, sendResetPwMail),
  takeEvery(CODE_LOGIN, codeLogin),
  takeEvery(RESET_PW, resetPw)
]
