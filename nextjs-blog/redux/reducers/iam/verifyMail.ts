export const VERIFY_MAIL_FAILURE='VERIFY_MAIL_FAILURE';
export const VERIFY_MAIL_SUCCESS='VERIFY_MAIL_SUCCESS';
export const VERIFY_MAIL_INVALID='VERIFY_MAIL_INVALID';
export const VERIFY_MAIL_REQUESTING='VERIFY_MAIL_REQUESTING';

const initialState = {
  readyStatus: VERIFY_MAIL_INVALID,
  data: null,
  err: null
};

export default (state = initialState, action)=> {
  switch (action.type) {
    case VERIFY_MAIL_SUCCESS:
      return { ...state, readyStatus: VERIFY_MAIL_SUCCESS, data: action.data };
    case VERIFY_MAIL_FAILURE:
      return { ...state, readyStatus: VERIFY_MAIL_FAILURE, err: action.err };
    case VERIFY_MAIL_REQUESTING:
      return { ...state, readyStatus: VERIFY_MAIL_REQUESTING };
    default:
      return state;
  }
};
