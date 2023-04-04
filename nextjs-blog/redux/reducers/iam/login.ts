export const LOGIN_INVALID = 'LOGIN_INVALID';
export const LOGIN_REQUESTING = 'LOGIN_REQUESTING';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const initialState = {
  readyStatus: LOGIN_INVALID,
  err: null
}

export const LOGIN_FAILURE_MSG = {
  LOGIN_FAILURE: {
    USER_NOT_FOUND: 'The email does not exist.',
    WRONG_PASSWORD: 'The password is wrong'
  }
};

export default (state, action) => {

  if(typeof state === 'undefined'){
    state = initialState
  }

  switch (action.type) {
    case LOGIN_INVALID:
      return {...state,
        readyStatus:  LOGIN_INVALID,
        err: null
      }
    case LOGIN_REQUESTING:
      return {...state,
        readyStatus:  LOGIN_REQUESTING,
        err: action.err
      }
    case LOGIN_SUCCESS:
      return {...state,
        readyStatus: LOGIN_SUCCESS,
      }
    case LOGIN_FAILURE:
      return {...state,
        readyStatus:  LOGIN_FAILURE,
        err: action.err
      }
    default:
      return state;
  }
};
