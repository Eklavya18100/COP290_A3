export const RESET_PW_FAILURE='RESET_PW_FAILURE';
export const RESET_PW_SUCCESS='RESET_PW_SUCCESS';
export const RESET_PW_INVALID='RESET_PW_INVALID';
export const RESET_PW_REQUESTING='RESET_PW_REQUESTING';

const initialState = {
  readyStatus: RESET_PW_INVALID,
  data: null,
  err: null
};

export default (state = initialState, action)=> {
  switch (action.type) {
    case RESET_PW_SUCCESS:
      return { ...state, readyStatus: RESET_PW_SUCCESS, data: action.data };
    case RESET_PW_FAILURE:
      return { ...state, readyStatus: RESET_PW_FAILURE, err: action.err };
    case RESET_PW_REQUESTING:
      return { ...state, readyStatus: RESET_PW_REQUESTING };
    default:
      return state;
  }
};
