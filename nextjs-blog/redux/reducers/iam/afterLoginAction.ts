export const SET_AFTER_LOGIN_ACTION = 'SET_AFTER_LOGIN_ACTION';

const initialState = null;



export default (state, action) => {

  if(typeof state === 'undefined'){
    state = initialState
  }

  switch (action.type) {
    case SET_AFTER_LOGIN_ACTION:
      return action.detail;
    default:
      return state;
  }
};