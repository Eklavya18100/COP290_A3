export const FETCH_HISTORY_FAILURE='FETCH_HISTORY_FAILURE';
export const FETCH_HISTORY_SUCCESS='FETCH_HISTORY_SUCCESS';
export const FETCH_HISTORY_INVALID='FETCH_HISTORY_INVALID';
export const FETCH_HISTORY_REQUESTING='FETCH_HISTORY_REQUESTING';

const initialState = {
  readyStatus: FETCH_HISTORY_INVALID,
  ids: [],
  data: null,
  err: null
};

export default (state = initialState, action)=> {
  switch (action.type) {
    case FETCH_HISTORY_SUCCESS:
      return { ...state, readyStatus: FETCH_HISTORY_SUCCESS,
        data: action.data, ids: action.ids };
    case FETCH_HISTORY_FAILURE:
      return { ...state, readyStatus: FETCH_HISTORY_FAILURE, err: action.err };
    case FETCH_HISTORY_REQUESTING:
      return { ...state, readyStatus: FETCH_HISTORY_REQUESTING };
    default:
      return state;
  }
};
