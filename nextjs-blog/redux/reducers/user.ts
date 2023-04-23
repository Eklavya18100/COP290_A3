import { REMOVE_USER_SESSION_MEMORY } from "./storage";

export const FETCH_USER_FAILURE='FETCH_USER_FAILURE';
export const FETCH_USER_SUCCESS='FETCH_USER_SUCCESS';
export const FETCH_USER_INVALID='FETCH_UESR_INVALID';
export const FETCH_USER_REQUESTING='FETCH_UESR_REQUESTING';

const initialState = {
  readyStatus: FETCH_USER_INVALID,
  data: {
    username: null,
    email: null,
    phone: null,
    freeQuota: null,
    paidQuota:null,
    accQuota: null,
    lastFreeQuotaUpdateDate: null,
    lastPurchaseDate: null,
    emailVerifiedAt: null,
    isAdmin: null
  },
  err: null
};

export default (state = initialState, action)=> {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return { ...state, readyStatus: FETCH_USER_SUCCESS, data: { ...state.data, ...action.data } };
    case FETCH_USER_FAILURE:
      return { ...state, readyStatus: FETCH_USER_FAILURE, err: action.err };
    case FETCH_USER_REQUESTING:
      return { ...state, readyStatus: FETCH_USER_REQUESTING };
    case REMOVE_USER_SESSION_MEMORY:
      return {...initialState}
    default:
      return state;
  }
};
