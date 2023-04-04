export const CODE_LOGIN_FAILURE='CODE_LOGIN_FAILURE';
export const CODE_LOGIN_SUCCESS='CODE_LOGIN_SUCCESS';
export const CODE_LOGIN_INVALID='CODE_LOGIN_INVALID';
export const CODE_LOGIN_REQUESTING='CODE_LOGIN_REQUESTING';

const initialState = {
  readyStatus: CODE_LOGIN_INVALID,
  data: null,
  err: null
};

export default (state = initialState, action)=> {
  switch (action.type) {
    case CODE_LOGIN_SUCCESS:
      return { ...state, readyStatus: CODE_LOGIN_SUCCESS, data: action.data };
    case CODE_LOGIN_FAILURE:
      return { ...state, readyStatus: CODE_LOGIN_FAILURE, err: action.err };
    case CODE_LOGIN_REQUESTING:
      return { ...state, readyStatus: CODE_LOGIN_REQUESTING };
    default:
      return state;
  }
};
