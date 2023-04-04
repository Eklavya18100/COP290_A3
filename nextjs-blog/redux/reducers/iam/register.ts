export const REGISTER_INVALID = ' REGISTER_INVALID'
export const REGISTER_REQUESTING = ' REGISTER_REQUESTING'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'

export const  REGISTER_FAILURE_MSG = {
  USER_EXISTED: 'This email is already registered'
};

const initialState = {
  readyStatus: REGISTER_INVALID,
  err: null
}

export default (state, action) => {

  if(typeof state === 'undefined'){
    state = initialState
  }

  switch (action.type) {
    case REGISTER_INVALID:
      return {...state,
        readyStatus:  REGISTER_INVALID,
        err: null
      }
    case REGISTER_REQUESTING:
      return {...state,
        readyStatus:  REGISTER_REQUESTING,
        requestId: null
      }
    case REGISTER_SUCCESS:
      return {...state,
        readyStatus: REGISTER_SUCCESS,
        err: null
      }
    case REGISTER_FAILURE:
      return {...state,
        readyStatus:  REGISTER_FAILURE,
        err: action.err
      }
    default:
      return state;
  }
};
