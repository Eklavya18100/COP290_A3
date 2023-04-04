export const UPDATE_USER_INVALID = ' UPDATE_USER_INVALID';
export const UPDATE_USER_REQUESTING = ' UPDATE_USER_REQUESTING';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';

const initialState = {
  readyStatus: UPDATE_USER_INVALID,
  err: null
};

export default (state, action) => {

  if(typeof state === 'undefined'){
    state = initialState
  }

  switch (action.type) {
    case UPDATE_USER_INVALID:
      return {...state,
        readyStatus:  UPDATE_USER_INVALID,
        err: null
      }
    case UPDATE_USER_REQUESTING:
      return {...state,
        readyStatus:  UPDATE_USER_REQUESTING,
        requestId: null
      }
    case UPDATE_USER_SUCCESS:
      return {...state,
        readyStatus: UPDATE_USER_SUCCESS,
        err: null
      }
    case UPDATE_USER_FAILURE:
      return {...state,
        readyStatus:  UPDATE_USER_FAILURE,
        err: action.err
      }
    default:
      return state;
  }
};
