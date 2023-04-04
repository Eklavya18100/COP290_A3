import {modalTypes, SET_UX_VALUE} from "../redux/reducers/ux";

export const CONNECTION_ERROR = 'CONNECTION_ERROR';
export const UNCAUGHT_SERVER_ERROR = 'SERVER_ERROR';
import {call, all, select, put, takeEvery} from "redux-saga/effects";
import {LOGOUT, logoutUser} from "../redux/actions/iam/auth";


export function* handleErrors(action, err){

  const whiteList = {
    EMAIL_UNVERIFIED: 'EMAIL_UNVERIFIED',
    USER_EXISTED: 'USER_EXISTED',
    EASY_PASSWORD: 'EASY_PASSWORD',
    PROPERTY_NOT_FOUND: 'PROPERTY_NOT_FOUND',
    LOGIN_USER_NOT_FOUND: 'LOGIN_USER_NOT_FOUND',
    LOGIN_INCORRECT_PASSWORD: 'LOGIN_INCORRECT_PASSWORD',
    USER_NOT_FOUND: 'USER_NOT_FOUND'
  };

  console.log(err)
  if (typeof err.response !== 'undefined'
    && typeof err.response.data !== 'undefined'
    && Array.isArray(err.response.data.errors)
    && err.response.data.errors.length > 0
  ) {
      const errs = err.response.data.errors;
      for (let i = 0; i < errs.length; i++) {
        const e = errs[i];
        const code = e.code;
        if (!(code in whiteList)) {
          yield all([
            put({type: SET_UX_VALUE, key: 'abnormalError', value: err.response.data.errors}),
            put({type: SET_UX_VALUE, key: 'modalType', value: modalTypes.INVALID})
            ])
        }
        if (code === 'EMAIL_UNVERIFIED') {
          yield put({type: SET_UX_VALUE, key: 'modalType', value: modalTypes.ACTION_NOT_VERIFIED})
        }

        if (code === 'JWT_MALFORMED') {
          yield call(logoutUser)
        }
      }

   yield put({
      type: action,
      err: err.response.data.errors
    })
  } else if(typeof err.response !== 'undefined'){
    console.log(err.response);
    console.log(err.response.data);
    const customErr = [{
      code: UNCAUGHT_SERVER_ERROR,
      msg: err.response.data,
      internal: true
    }]
    yield put({
      type: action,
      err: customErr
    })

    yield all([
      put({type: SET_UX_VALUE, key: 'abnormalError', value: customErr }),
      put({type: SET_UX_VALUE, key: 'modalType', value: modalTypes.INVALID})
      ])

  }
  else{
    const customErr  = [ {
      code: CONNECTION_ERROR,
      msg: err.message
    }];

    yield put({
      type: action,
      err: customErr
    })
    yield all([
      put({type: SET_UX_VALUE, key: 'abnormalError', value: customErr }),
      put({type: SET_UX_VALUE, key: 'modalType', value: modalTypes.INVALID})
    ])
  }
}
