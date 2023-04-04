import {
    VERIFY_MAIL_REQUESTING,
    VERIFY_MAIL_SUCCESS,
    VERIFY_MAIL_FAILURE,
    VERIFY_MAIL_INVALID
} from '../../reducers/iam/verifyMail'

import {
    SEND_VERIFY_MAIL_REQUESTING,
    SEND_VERIFY_MAIL_SUCCESS,
    SEND_VERIFY_MAIL_FAILURE,
    SEND_VERIFY_MAIL_INVALID
} from '../../reducers/iam/sendVerifyMail'

export const SEND_RESET_PW_MAIL = 'SEND_RESET_PW_MAIL';
export const RESET_PW = 'RESET_PW'
export const CODE_LOGIN = 'CODE_LOGIN'
export const VERIFY_MAIL = 'VERIFY_MAIL'
export const SEND_VERIFY_MAIL = 'SEND_VERIFY_MAIL'


import { all, select, put, call, fork } from "redux-saga/effects"
import * as Eff from "redux-saga/effects"
import iamAPI from '../../api/iam';
import {SET_AUTH_MODAL_PAGE} from '../../reducers/ux';
import authModalPages from '../../../constants/authModalPages';

const takeEvery : any = Eff.takeEvery

function *sendVerifyMail({ data }){
    const readyStatus = yield select(state => state.sendResetPwMail.readyStatus)
    const jwt = yield select(state => state.storage.jwt)
    if(readyStatus === SEND_VERIFY_MAIL_REQUESTING) return;
    yield put({type: SEND_VERIFY_MAIL_REQUESTING, email: data.email });
    try {
        const res = yield call(iamAPI.sendResetPwMail, data);
        console.log(res)
        yield put({type: SEND_VERIFY_MAIL_SUCCESS, data: res.data.data})
        yield put({ type: SET_AUTH_MODAL_PAGE, value: authModalPages.RESET_PASSWORD_INPUT_CODE})
    } catch (err) {
        console.log(err);
        console.log(typeof err);
        console.log(JSON.stringify(err));
        yield  put({type: SEND_VERIFY_MAIL_FAILURE, err: err })
    }
}

function *verifyMail({ data }){
    const readyStatus = yield select(state => state.verifyMail.readyStatus)
    if(readyStatus === VERIFY_MAIL_REQUESTING) return;
    yield put({type: VERIFY_MAIL_REQUESTING, email: data.email });
    try {
        const res = yield call(iamAPI.verifyMail, data);
        console.log(res)
        yield put({type: VERIFY_MAIL_SUCCESS, data: res.data.data})
        yield put({ type: SET_AUTH_MODAL_PAGE, value: authModalPages.RESET_PASSWORD_INPUT_CODE})
    } catch (err) {
        console.log(err);
        console.log(typeof err);
        console.log(JSON.stringify(err));
        yield  put({type:  VERIFY_MAIL_FAILURE, err: err })
    }
}


export default [
    takeEvery(VERIFY_MAIL, verifyMail),
    takeEvery(SEND_VERIFY_MAIL, sendVerifyMail)
]
