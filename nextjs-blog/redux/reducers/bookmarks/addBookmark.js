export const ADD_BOOKMARK_FAILURE='ADD_BOOKMARK_FAILURE';
export const ADD_BOOKMARK_SUCCESS='ADD_BOOKMARK_SUCCESS';
export const ADD_BOOKMARK_INVALID='ADD_BOOKMARK_INVALID';
export const ADD_BOOKMARK_REQUESTING='ADD_BOOKMARK_REQUESTING';

const initialState = {
  readyStatus: ADD_BOOKMARK_INVALID,
  data: null,
  err: null
};

export default (state = initialState, action)=> {
  switch (action.type) {
    case ADD_BOOKMARK_SUCCESS:
      return { ...state, readyStatus: ADD_BOOKMARK_SUCCESS, data: action.data };
    case ADD_BOOKMARK_FAILURE:
      return { ...state, readyStatus: ADD_BOOKMARK_FAILURE, err: action.err };
    case ADD_BOOKMARK_REQUESTING:
      return { ...state, readyStatus: ADD_BOOKMARK_REQUESTING };
    default:
      return state;
  }
};
