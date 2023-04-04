export const SEND_VERIFY_MAIL_FAILURE='SEND_VERIFY_MAIL_FAILURE';
export const SEND_VERIFY_MAIL_SUCCESS='SEND_VERIFY_MAIL_SUCCESS';
export const SEND_VERIFY_MAIL_INVALID='SEND_VERIFY_MAIL_INVALID';
export const SEND_VERIFY_MAIL_REQUESTING='SEND_VERIFY_MAIL_REQUESTING';

const initialState = {
  readyStatus: SEND_VERIFY_MAIL_INVALID,
  data: null,
  err: null
};

export default (state = initialState, action)=> {
  switch (action.type) {
    case SEND_VERIFY_MAIL_SUCCESS:
      return { ...state, readyStatus: SEND_VERIFY_MAIL_SUCCESS, data: action.data };
    case SEND_VERIFY_MAIL_FAILURE:
      return { ...state, readyStatus: SEND_VERIFY_MAIL_FAILURE, err: action.err };
    case SEND_VERIFY_MAIL_REQUESTING:
      return { ...state, readyStatus: SEND_VERIFY_MAIL_REQUESTING };
    default:
      return state;
  }
};
