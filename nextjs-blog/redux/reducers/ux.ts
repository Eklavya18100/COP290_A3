import fp from 'lodash/fp';
import {HYDRATE} from "next-redux-wrapper";
import { tabNames } from "../../constants/tabNames"
import authModalPages from '../../constants/authModalPages';

export const SET_UX_VALUE='SET_UX_VALUE';
export const SET_NAVI_SCRN='SET_NAVI_SCRN'
export const FORM_NEXT = 'FORM_NEXT';
export const FORM_PREV = 'FORM_PREV';
export const SET_FORM_PAGE_CURRENT = 'SET_FORM_PAGE_CURRENT';
export const SET_FORM_PAGE_MAX = 'SET_FORM_PAGE_MAX';
export const SET_UPDATE_FORM_PAGE_CURRENT = 'SET_UPDATE_FORM_PAGE_CURRENT';
export const SET_AUTH_MODAL_PAGE='SET_AUTH_MODAL_PAGE';
export const SET_CAT_ID='SET_CAT_ID'

export const modalTypes = {
  REGISTER_NOT_VERIFIED: 'REGISTER_NOT_VERIFIED',
  REGISTER_VERIFIED: 'REGISTER_VERIFIED',
  LOGIN_NOT_VERIFIED: 'LOGIN_NOT_VERIFIED',
  LOGIN_VERIFIED: 'LOGIN_VERIFIED',
  ACTION_NOT_VERIFIED: 'ACTION_NOT_VERIFIED',
  INVALID: 'INVALID',
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  FORGET_PASSWORD: 'FORGET_PASSWORD',
  RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS'
}


const initialState = {
  commentPageActive: false,
  filterMenuActiveOnMobile: false,
  language: 'en',
  isSearch: false,
  currency: null,
  authModalPage: authModalPages.INVALID,
  profileActive: false,
  sideBarActive: false,
  quotaModalActive: false,
  profileModalActive: false,
  abnormalError: null,
  cat_id: 1,
  navi_scrn: tabNames.HOME,
};

export default (state = initialState, action)=> {
  // console.log(state)
  let current;
  switch (action.type) {
    case HYDRATE:
      console.log(action)
      return {...state, ...action.payload.ux};
    case SET_AUTH_MODAL_PAGE:
      return { ...state, authModalPage: action.value };
    case SET_CAT_ID:
      return { ...state, cat_id: action.value };
    case SET_UX_VALUE:
      return { ...state, [action.key]: action.value };
    case SET_NAVI_SCRN:
      return { ...state, navi_scrn: action.value };
    default:
      return state;
  }
};
