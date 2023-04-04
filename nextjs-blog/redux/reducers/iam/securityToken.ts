export const SECURITY_TOKEN_INVALID = ' SECURITY_TOKEN_INVALID';
export const SECURITY_TOKEN_REQUESTING = ' SECURITY_TOKEN_REQUESTING';
export const SECURITY_TOKEN_FAILURE = 'SECURITY_TOKEN_FAILURE';
export const SECURITY_TOKEN_SUCCESS = 'SECURITY_TOKEN_SUCCESS';

const initialState = {
  readyStatus: SECURITY_TOKEN_INVALID,
  err: null
};

export default (state, action) => {

  if(typeof state === 'undefined'){
    state = initialState
  }

  switch (action.type) {
    case SECURITY_TOKEN_INVALID:
      return {...state,
        readyStatus:  SECURITY_TOKEN_INVALID,
        err: null
      }
    case SECURITY_TOKEN_REQUESTING:
      return {...state,
        readyStatus:  SECURITY_TOKEN_REQUESTING,
        requestId: null
      }
    case SECURITY_TOKEN_SUCCESS:
      return {...state,
        readyStatus: SECURITY_TOKEN_SUCCESS,
        err: null
      }
    case SECURITY_TOKEN_FAILURE:
      return {...state,
        readyStatus:  SECURITY_TOKEN_FAILURE,
        err: action.err
      }
    default:
      return state;
  }
};
