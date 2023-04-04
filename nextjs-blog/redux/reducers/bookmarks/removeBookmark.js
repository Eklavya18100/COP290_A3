export const REMOVE_BOOKMARK_FAILURE='REMOVE_BOOKMARK_FAILURE';
export const REMOVE_BOOKMARK_SUCCESS='REMOVE_BOOKMARK_SUCCESS';
export const REMOVE_BOOKMARK_INVALID='REMOVE_BOOKMARK_INVALID';
export const REMOVE_BOOKMARK_REQUESTING='REMOVE_BOOKMARK_REQUESTING';

const initialState = {
  readyStatus: REMOVE_BOOKMARK_INVALID,
  data: null,
  err: null
};

export default (state = initialState, action)=> {
  switch (action.type) {
    case REMOVE_BOOKMARK_SUCCESS:
      return { ...state, readyStatus: REMOVE_BOOKMARK_SUCCESS, data: action.data };
    case REMOVE_BOOKMARK_FAILURE:
      return { ...state, readyStatus: REMOVE_BOOKMARK_FAILURE, err: action.err };
    case REMOVE_BOOKMARK_REQUESTING:
      return { ...state, readyStatus: REMOVE_BOOKMARK_REQUESTING };
    default:
      return state;
  }
};
