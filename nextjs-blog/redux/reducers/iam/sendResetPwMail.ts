export const SEND_RESET_PW_MAIL_FAILURE='SEND_RESET_PW_MAIL_FAILURE';
export const SEND_RESET_PW_MAIL_SUCCESS='SEND_RESET_PW_MAIL_SUCCESS';
export const SEND_RESET_PW_MAIL_INVALID='SEND_RESET_PW_MAIL_INVALID';
export const SEND_RESET_PW_MAIL_REQUESTING='SEND_RESET_PW_MAIL_REQUESTING';

const initialState = {
  readyStatus: SEND_RESET_PW_MAIL_INVALID,
  email: null,
  data: null,
  err: null
};

export default (state = initialState, action)=> {
  switch (action.type) {
    case SEND_RESET_PW_MAIL_SUCCESS:
      return { ...state, readyStatus: SEND_RESET_PW_MAIL_SUCCESS, data: action.data };
    case SEND_RESET_PW_MAIL_FAILURE:
      return { ...state, readyStatus: SEND_RESET_PW_MAIL_FAILURE, err: action.err };
    case SEND_RESET_PW_MAIL_REQUESTING:
      return { ...state, readyStatus: SEND_RESET_PW_MAIL_REQUESTING, email: action.email };
    case SEND_RESET_PW_MAIL_INVALID:
      return initialState;
    default:
      return state;
  }
};
