import {
  LOGIN_INVALID,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUESTING,
} from '../../reducers/iam/login'

import {
  REGISTER_INVALID,
  REGISTER_REQUESTING,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../../reducers/iam/register'

import { SET_STORAGE_ITEM } from '../../reducers/storage';
import { SET_AUTH_MODAL_PAGE } from '../../reducers/ux';

import authModalPages from '../../../constants/authModalPages';

import router from 'next/router'
import {select, put, all, call, takeEvery} from "redux-saga/effects"
import cookie from 'js-cookie'
import { handleErrors } from "../../../helpers/handleErrors";
import {modalTypes,  SET_UX_VALUE} from "../../reducers/ux";
// import cookieSetting from "../../../helpers/cookieSetting";

import iamAPI from '../../api/iam'

export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';
export const SEND_ACTIVATE_ACCOUNT_MAIL = 'SEND_ACTIVATE_ACCOUNT_MAIL';
export const REMOVE_USER_SESSION_MEMORY  = 'REMOVE_USER_SESSION_MEMORY'


function *login({ data, action = null, type }){
  console.log(data)
  const readyStatus = yield select(state => state.login.readyStatus);
  if (readyStatus === LOGIN_REQUESTING) return;

  yield put({type: LOGIN_REQUESTING});
  try {
    const json = yield call(iamAPI.emailLogin, data);
    const result = json.data.data;

    const { info, token } = result;
 
    // cookie.set('info', info, cookieSetting);
    // cookie.set('token', token, cookieSetting);
    yield all([
      put({type: LOGIN_SUCCESS}),
      put({type: SET_STORAGE_ITEM, key: 'userID', value: info.cus_uid}),
      put({type: SET_STORAGE_ITEM, key: 'isLoggedIn', value: true}),
      put({type: SET_STORAGE_ITEM, key: 'loginType', value: 'email'}),
      put({type: SET_STORAGE_ITEM, key: 'userName', value: info.username}),
      put({ type: SET_AUTH_MODAL_PAGE, value: authModalPages.SUCCESS })
    ]);
    yield call(router.push, '/app')
  } catch (err) {
    
    yield handleErrors(LOGIN_FAILURE, err);
  }
}

function *register({data, action = null, type}){
  const readyStatus = yield select(state => state.register.readyStatus);
  if (readyStatus === REGISTER_REQUESTING) return;
  yield put({type: REGISTER_REQUESTING});
  try {
    const json = yield call(iamAPI.emailRegister, data);
    const result = json.data.data;
    console.log(json);
    const { info, token } = result;
    // cookie.set('token', token, cookieSetting);
    yield all([
      put({type: REGISTER_SUCCESS}),
      put({type: SET_STORAGE_ITEM, key: 'userID', value: info.cus_uid}),
      put({type: SET_STORAGE_ITEM, key: 'userType', value: 'customer'}),
      put({type: SET_STORAGE_ITEM, key: 'isLoggedIn', value: true}),
      put({type: SET_STORAGE_ITEM, key: 'loginType', value: 'email'}),
      put({type: SET_STORAGE_ITEM, key: 'userName', value: info.username}),
      put({
        type: SET_AUTH_MODAL_PAGE, value: authModalPages.EMAIL_VERIFICATION
      }),
    ]);

  } catch (err) {
    yield handleErrors(REGISTER_FAILURE, err);
  }
}

export function *logoutUser(){
  try {
    // cookie.remove('token', cookieSetting);
    // cookie.remove('info', cookieSetting);
    yield put({type: REMOVE_USER_SESSION_MEMORY});
    yield call(router.push, '/')
  } catch (err) {
    alert('Logout user fail');
    throw err;
  }
}



export default[
  takeEvery(LOGIN, login),
  takeEvery(REGISTER, register),
  takeEvery(LOGOUT, logoutUser),
]
