export const SEARCH_FAILURE='SEARCH_FAILURE';
export const SEARCH_SUCCESS='SEARCH_SUCCESS';
export const SEARCH_INVALID='SEARCH_INVALID';
export const SEARCH_REQUESTING='SEARCH_REQUESTING';

const initialState = {
  readyStatus: SEARCH_INVALID,
  data: null,
  err: null
};

export default (state = initialState, action)=> {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return { ...state, readyStatus: SEARCH_SUCCESS, data: action.data };
    case SEARCH_FAILURE:
      return { ...state, readyStatus: SEARCH_FAILURE, err: action.err };
    case SEARCH_REQUESTING:
      return { ...state, readyStatus: SEARCH_REQUESTING };
    case SEARCH_INVALID:
      return initialState;
    default:
      return state;
  }
};
