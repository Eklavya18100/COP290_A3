export const FETCH_SITUATIONS_FAILURE='FETCH_SITUATIONS_FAILURE';
export const FETCH_SITUATIONS_SUCCESS='FETCH_SITUATIONS_SUCCESS';
export const FETCH_SITUATIONS_INVALID='FETCH_SITUATIONS_INVALID';
export const FETCH_SITUATIONS_REQUESTING='FETCH_SITUATIONS_REQUESTING';

const initialState = {
  readyStatus: FETCH_SITUATIONS_INVALID,
  data: null,
  err: null
};

export default (state = initialState, action)=> {
  switch (action.type) {
    case FETCH_SITUATIONS_SUCCESS:
      return { ...state, readyStatus: FETCH_SITUATIONS_SUCCESS, data: { ...state.data, ...action.data } };
    case FETCH_SITUATIONS_FAILURE:
      return { ...state, readyStatus: FETCH_SITUATIONS_FAILURE, err: action.err };
    case FETCH_SITUATIONS_REQUESTING:
      return { ...state, readyStatus: FETCH_SITUATIONS_REQUESTING };
    default:
      return state;
  }
};
